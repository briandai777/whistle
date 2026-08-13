"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ScenarioCard from "../components/ScenarioCard";
import { scenarios } from "../../scenarios";

function PracticeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const totalQuestions = Math.min(
    Number(searchParams.get("count")) || scenarios.length,
    scenarios.length
  );

  const [practiceScenarios, setPracticeScenarios] = useState<
    typeof scenarios
  >([]);

  const [currentScenario, setCurrentScenario] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [loadedSession, setLoadedSession] = useState(false);
  const [showResumeChoice, setShowResumeChoice] = useState(false);

  const clearPracticeSession = () => {
    sessionStorage.removeItem("whistle-current-scenario");
    sessionStorage.removeItem("whistle-score");
    sessionStorage.removeItem("whistle-completed");
    sessionStorage.removeItem("whistle-scenario-order");
    sessionStorage.removeItem("whistle-session-count");
  };

  useEffect(() => {
    const savedOrder = sessionStorage.getItem(
      "whistle-scenario-order"
    );

    const savedCount = sessionStorage.getItem(
      "whistle-session-count"
    );

    const savedScenario = sessionStorage.getItem(
      "whistle-current-scenario"
    );

    const savedScore = sessionStorage.getItem(
      "whistle-score"
    );

    const savedCompleted = sessionStorage.getItem(
      "whistle-completed"
    );

    let selectedScenarios: typeof scenarios | null = null;

    if (
      savedOrder &&
      Number(savedCount) === totalQuestions
    ) {
      try {
        const savedIds: string[] = JSON.parse(savedOrder);

        selectedScenarios = savedIds
          .map((id) =>
            scenarios.find((scenario) => {
              const scenarioId =
                `${scenario.videoId}-${scenario.startTime}`;

              return scenarioId === id;
            })
          )
          .filter(
            (scenario): scenario is (typeof scenarios)[number] =>
              scenario !== undefined
          )
          .slice(0, totalQuestions);
      } catch {
        selectedScenarios = null;
      }
    }

    if (
      !selectedScenarios ||
      selectedScenarios.length !== totalQuestions
    ) {
      selectedScenarios = [...scenarios]
        .sort(() => Math.random() - 0.5)
        .slice(0, totalQuestions);

      const scenarioIds = selectedScenarios.map(
        (scenario) =>
          `${scenario.videoId}-${scenario.startTime}`
      );

      sessionStorage.setItem(
        "whistle-scenario-order",
        JSON.stringify(scenarioIds)
      );

      sessionStorage.setItem(
        "whistle-session-count",
        totalQuestions.toString()
      );

      sessionStorage.removeItem(
        "whistle-current-scenario"
      );

      sessionStorage.removeItem("whistle-score");
      sessionStorage.removeItem("whistle-completed");
    }

    setPracticeScenarios(selectedScenarios);

    if (savedScenario !== null) {
      const scenarioNumber = Number(savedScenario);

      if (
        scenarioNumber >= 0 &&
        scenarioNumber < selectedScenarios.length
      ) {
        setCurrentScenario(scenarioNumber);
      }
    }

    if (savedScore !== null) {
      setScore(Number(savedScore));
    }

    if (savedCompleted === "true") {
      setCompleted(true);
    }

    if (
      savedScenario !== null &&
      Number(savedScenario) > 0 &&
      savedCompleted !== "true"
    ) {
      setShowResumeChoice(true);
    }

    setLoadedSession(true);
  }, [totalQuestions]);

  useEffect(() => {
    if (!loadedSession) return;

    sessionStorage.setItem(
      "whistle-current-scenario",
      currentScenario.toString()
    );
  }, [currentScenario, loadedSession]);

  useEffect(() => {
    if (!loadedSession) return;

    sessionStorage.setItem(
      "whistle-score",
      score.toString()
    );
  }, [score, loadedSession]);

  useEffect(() => {
    if (!loadedSession) return;

    sessionStorage.setItem(
      "whistle-completed",
      completed.toString()
    );
  }, [completed, loadedSession]);

  const progress =
    practiceScenarios.length > 0
      ? ((currentScenario + 1) /
          practiceScenarios.length) *
        100
      : 0;

  if (!loadedSession || practiceScenarios.length === 0) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-green-700 rounded-full animate-spin mx-auto" />

          <p className="mt-4 text-gray-700 font-semibold">
            Loading practice...
          </p>
        </div>
      </main>
    );
  }

  if (showResumeChoice) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-xl w-full bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm text-center">

          <p className="text-green-700 text-sm font-bold uppercase tracking-wider">
            Welcome Back
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-gray-950">
            You have a practice session in progress.
          </h1>

          <p className="mt-4 text-gray-700 text-lg">
            You left off at Scenario {currentScenario + 1} of{" "}
            {practiceScenarios.length}.
          </p>

          <p className="mt-2 text-gray-600">
            Current score: {score}
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <button
              onClick={() => {
                setShowResumeChoice(false);
              }}
              className="w-full bg-green-700 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-800 transition cursor-pointer"
            >
              Continue Scenario {currentScenario + 1} →
            </button>

            <button
              onClick={() => {
                clearPracticeSession();
                router.push("/practice/setup");
              }}
              className="w-full border-2 border-gray-300 text-gray-800 px-6 py-4 rounded-xl font-bold hover:bg-gray-100 transition cursor-pointer"
            >
              Start New Session
            </button>

            <button
              onClick={() => router.push("/")}
              className="w-full text-gray-600 px-6 py-3 font-semibold hover:text-gray-900 transition cursor-pointer"
            >
              Back Home
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (completed) {
    const accuracy = Math.round(
      (score / practiceScenarios.length) * 100
    );

    return (
      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 md:p-12 text-center">

            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center text-3xl">
              ✓
            </div>

            <p className="mt-6 text-green-700 text-sm font-bold uppercase tracking-wider">
              Session Complete
            </p>

            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-950">
              Nice work.
            </h1>

            <div className="mt-10">
              <p className="text-gray-600 font-semibold">
                Your Score
              </p>

              <p className="mt-2 text-6xl font-extrabold text-green-700">
                {score}
                <span className="text-3xl text-gray-400">
                  {" "}
                  / {practiceScenarios.length}
                </span>
              </p>

              <p className="mt-4 text-xl font-bold text-gray-900">
                {accuracy}% accuracy
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
                <p className="text-3xl font-extrabold text-green-700">
                  {score}
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  Correct
                </p>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
                <p className="text-3xl font-extrabold text-red-600">
                  {practiceScenarios.length - score}
                </p>

                <p className="mt-1 text-sm font-semibold text-gray-700">
                  Incorrect
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  clearPracticeSession();
                  router.push("/");
                }}
                className="flex-1 border-2 border-gray-300 text-gray-800 px-6 py-3.5 rounded-xl font-bold hover:bg-gray-100 transition cursor-pointer"
              >
                ← Back Home
              </button>

              <button
                onClick={() => {
                  clearPracticeSession();
                  router.push("/practice/setup");
                }}
                className="flex-1 bg-green-700 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-green-800 transition cursor-pointer"
              >
                Practice Again →
              </button>
            </div>

          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-10">

      <div className="max-w-5xl mx-auto px-6 mb-8">

        <div className="relative flex items-center justify-center">
          <button
            onClick={() => router.push("/")}
            className="absolute left-0 flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 font-bold hover:bg-gray-100 hover:border-gray-400 transition cursor-pointer"
          >
            ← Home
          </button>

          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-950">
            Referee Practice
          </h1>
        </div>

        <div className="mt-8 bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">

          <div className="flex justify-between items-center gap-4">
            <button
              onClick={() => {
                if (currentScenario > 0) {
                  const previousScenario =
                    currentScenario - 1;

                  setCurrentScenario(
                    previousScenario
                  );

                  router.replace(
                    `/practice?count=${totalQuestions}&scenario=${
                      previousScenario + 1
                    }`
                  );
                }
              }}
              disabled={currentScenario === 0}
              className="px-4 py-2 rounded-xl font-bold text-gray-800 border border-gray-300 hover:bg-gray-100 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              ← Previous
            </button>

            <p className="font-bold text-gray-900 text-center">
              Scenario {currentScenario + 1} of{" "}
              {practiceScenarios.length}
            </p>

            <button
              onClick={() => {
                if (
                  currentScenario <
                  practiceScenarios.length - 1
                ) {
                  const nextScenario =
                    currentScenario + 1;

                  setCurrentScenario(
                    nextScenario
                  );

                  router.replace(
                    `/practice?count=${totalQuestions}&scenario=${
                      nextScenario + 1
                    }`
                  );
                }
              }}
              disabled={
                currentScenario ===
                practiceScenarios.length - 1
              }
              className="px-4 py-2 rounded-xl font-bold text-gray-800 border border-gray-300 hover:bg-gray-100 transition disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              Next →
            </button>
          </div>

          <div className="mt-5 flex justify-between text-sm">
            <p className="font-semibold text-gray-700">
              Score: {score}
            </p>

            <p className="font-semibold text-gray-600">
              {Math.round(progress)}% complete
            </p>
          </div>

          <div className="mt-2 w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-700 rounded-full transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>

      {practiceScenarios[currentScenario] && (
        <ScenarioCard
          key={`${practiceScenarios[currentScenario].videoId}-${practiceScenarios[currentScenario].startTime}`}
          scenario={practiceScenarios[currentScenario]}
          onCorrect={() => {
            setScore(
              (previousScore) =>
                previousScore + 1
            );
          }}
          onIncorrect={() => {
            // Incorrect answers and skips add no point.
          }}
          onNext={() => {
            if (
              currentScenario <
              practiceScenarios.length - 1
            ) {
              const nextScenario =
                currentScenario + 1;

              setCurrentScenario(nextScenario);

              router.replace(
                `/practice?count=${totalQuestions}&scenario=${
                  nextScenario + 1
                }`
              );
            } else {
              setCompleted(true);
            }
          }}
        />
      )}

    </main>
  );
}

export default function Practice() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <p className="text-gray-700 font-semibold">
            Loading practice...
          </p>
        </main>
      }
    >
      <PracticeContent />
    </Suspense>
  );
}