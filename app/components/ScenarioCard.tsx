"use client";

import { useEffect, useRef, useState } from "react";

type Scenario = {
  videoId: string;
  startTime: number;
  endTime: number;
  question: string;
  choices: string[];
  correctAnswer?: string;
  correctAnswers?: string[];
  explanation: string;
};

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function ScenarioCard({
  scenario,
  onCorrect,
  onIncorrect,
  onNext,
}: {
  scenario: Scenario;
  onCorrect: () => void;
  onIncorrect: () => void;
  onNext: () => void;
}) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [skipped, setSkipped] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const isCorrect =
    selectedAnswer === scenario.correctAnswer ||
    scenario.correctAnswers?.includes(selectedAnswer) === true;

  const correctAnswerText = scenario.correctAnswers
    ? scenario.correctAnswers.join(" OR ")
    : scenario.correctAnswer;

  const clearIncidentTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const startIncidentTimer = () => {
    clearIncidentTimer();

    const duration = scenario.endTime - scenario.startTime;

    timerRef.current = setTimeout(() => {
      setVideoFinished(true);

      if (playerRef.current) {
        playerRef.current.pauseVideo();
      }
    }, duration * 1000);
  };

  useEffect(() => {
    setSelectedAnswer("");
    setSubmitted(false);
    setVideoFinished(false);
    setPlayerReady(false);
    setSkipped(false);
    setShowHelp(false);

    clearIncidentTimer();

    const createPlayer = () => {
      if (!containerRef.current || !window.YT?.Player) return;

      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }

      playerRef.current = new window.YT.Player(containerRef.current, {
        width: "100%",
        height: "100%",

        playerVars: {
          controls: 1,
          rel: 0,
          playsinline: 1,
        },

        events: {
          onReady: (event: any) => {
            setPlayerReady(true);

            event.target.loadVideoById({
              videoId: scenario.videoId,
              startSeconds: scenario.startTime,
            });

            setTimeout(() => {
              event.target.playVideo();
              startIncidentTimer();
            }, 300);
          },
        },
      });
    };

    if (window.YT?.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;

      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    }

    return () => {
      clearIncidentTimer();

      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [scenario]);

  const replayIncident = () => {
    setVideoFinished(false);

    clearIncidentTimer();

    if (playerRef.current) {
      playerRef.current.seekTo(scenario.startTime, true);
      playerRef.current.playVideo();

      startIncidentTimer();
    }
  };

  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-6 mx-auto transition-all duration-500 ${
        videoFinished ? "max-w-3xl" : "max-w-6xl"
      }`}
    >
      {/* HELP */}
<div className="flex items-center justify-end gap-2 mb-3 px-1">
  <span className="text-sm font-semibold text-gray-500">
    Need help? →
  </span>

  <button
    onClick={() => setShowHelp(true)}
    className="w-9 h-9 rounded-full border-2 border-gray-300 text-gray-700 font-extrabold hover:border-green-600 hover:text-green-700 hover:bg-green-50 transition cursor-pointer"
    aria-label="Practice help"
  >
    ?
  </button>
</div>
      {/* VIDEO */}
      <div
        className={`aspect-video rounded-xl overflow-hidden bg-black transition-all duration-500 relative ${
          videoFinished ? "max-w-3xl mx-auto" : "w-full"
        }`}
      >
        {/* YOUTUBE PLAYER */}
        <div ref={containerRef} className="w-full h-full" />

      {/* TOP OVERLAY — leaves top-right controls exposed */}
<div className="absolute top-0 left-0 w-[90%] h-[50px] bg-black z-10 pointer-events-none flex items-center justify-center rounded-br-lg">
  <span className="text-white text-sm font-semibold tracking-wide">
    Whistle - Referee Practice
  </span>
</div>
      </div>

      {/* REPLAY */}
      <button
        onClick={replayIncident}
        disabled={!playerReady}
        className="mt-4 w-full bg-green-700 text-white px-5 py-3 rounded-xl font-bold hover:bg-green-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        🔁 Replay Incident
      </button>

      {!videoFinished && (
        <p className="mt-4 text-center text-gray-700 font-semibold">
          Watch the incident carefully. Your decision will appear when the clip
          ends.
        </p>
      )}

      {!playerReady && (
        <p className="mt-4 text-center text-gray-600">
          Loading video...
        </p>
      )}

      {/* QUESTION + ANSWERS */}
      {videoFinished && (
        <div className="mt-8">
          <h2 className="text-2xl font-extrabold text-gray-950">
            {scenario.question}
          </h2>

          <div className="mt-5 flex flex-col gap-3">
            {scenario.choices.map((choice) => (
              <button
                key={choice}
                onClick={() => {
                  if (!submitted) {
                    setSelectedAnswer(choice);
                  }
                }}
                disabled={submitted}
                className={`border-2 rounded-xl p-4 text-left font-semibold text-gray-900 transition-all ${
                  selectedAnswer === choice
                    ? "bg-green-100 border-green-600 ring-2 ring-green-500"
                    : "border-gray-300 hover:bg-green-50 hover:border-green-500 hover:shadow-sm"
                } ${
                  submitted
                    ? "cursor-not-allowed opacity-70"
                    : "cursor-pointer"
                }`}
              >
                {choice}
              </button>
            ))}
          </div>

          {/* SUBMIT + SKIP */}
          {!submitted && (
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  if (!selectedAnswer) return;

                  setSubmitted(true);
                  setSkipped(false);

                  if (isCorrect) {
                    onCorrect();
                  } else {
                    onIncorrect();
                  }
                }}
                disabled={!selectedAnswer}
                className="flex-1 bg-green-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-800 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>

              <button
                onClick={() => {
                  setSelectedAnswer("");
                  setSkipped(true);
                  setSubmitted(true);
                  onIncorrect();
                }}
                className="flex-1 border-2 border-gray-300 text-gray-800 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition cursor-pointer"
              >
                Skip Scenario
              </button>
            </div>
          )}

          {/* RESULT */}
          {submitted && (
            <div
              className={`mt-6 rounded-2xl border-2 overflow-hidden ${
                skipped
                  ? "border-orange-300"
                  : isCorrect
                  ? "border-green-300"
                  : "border-red-300"
              }`}
            >
              {/* RESULT HEADER */}
              <div
                className={`p-5 ${
                  skipped
                    ? "bg-orange-50"
                    : isCorrect
                    ? "bg-green-50"
                    : "bg-red-50"
                }`}
              >
                <p
                  className={`text-sm font-bold uppercase tracking-wider ${
                    skipped
                      ? "text-orange-700"
                      : isCorrect
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {skipped
                    ? "Scenario Skipped"
                    : isCorrect
                    ? "Correct Decision"
                    : "Not Quite"}
                </p>

                <h3
                  className={`mt-1 text-3xl font-extrabold ${
                    skipped
                      ? "text-orange-800"
                      : isCorrect
                      ? "text-green-800"
                      : "text-red-800"
                  }`}
                >
                  {skipped
                    ? "Counted as incorrect"
                    : isCorrect
                    ? "✓ Correct"
                    : "✕ Incorrect"}
                </h3>
              </div>

              {/* RESULT BODY */}
              <div className="bg-white p-6">
                {!isCorrect && !skipped && (
                  <div className="mb-5">
                    <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
                      Your call
                    </p>

                    <p className="mt-1 font-semibold text-gray-900">
                      {selectedAnswer}
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
                    Correct decision
                  </p>

                  <p className="mt-1 text-xl font-extrabold text-gray-950">
                    {correctAnswerText}
                  </p>
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <p className="text-sm font-bold uppercase tracking-wider text-green-700">
                    Why?
                  </p>

                  <p className="mt-2 text-gray-800 leading-relaxed">
                    {scenario.explanation}
                  </p>
                </div>

                <button
                  onClick={onNext}
                  className="mt-7 w-full bg-green-700 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-green-800 transition cursor-pointer"
                >
                  Next Scenario →
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* HELP POPUP */}
      {showHelp && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-5">
          <div className="bg-white rounded-3xl max-w-lg w-full p-7 shadow-2xl">
            <div className="flex justify-between items-start gap-4">
              <div>
                <p className="text-green-700 text-sm font-bold uppercase tracking-wider">
                  Practice Help
                </p>

                <h2 className="mt-1 text-2xl font-extrabold text-gray-950">
                  Need help?
                </h2>
              </div>

              <button
                onClick={() => setShowHelp(false)}
                className="w-9 h-9 rounded-full bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition cursor-pointer"
                aria-label="Close help"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="font-bold text-gray-950">
                  🔁 Need another look?
                </p>

                <p className="mt-1 text-gray-600">
                  Use <strong>Replay Incident</strong> as many times as you need
                  before answering.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-950">
                  🤔 Not sure?
                </p>

                <p className="mt-1 text-gray-600">
                  You can use <strong>Skip Scenario</strong>, but it will count
                  as incorrect.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-950">
                  🎥 Video look blurry?
                </p>

                <p className="mt-1 text-gray-600">
                  Use the settings button in the YouTube player to select a
                  higher video quality when available.
                </p>
              </div>

              <div>
                <p className="font-bold text-gray-950">
                  ⚖️ Remember
                </p>

                <p className="mt-1 text-gray-600">
                  Some decisions involve referee judgment. Whistle is for
                  practice, not an official match ruling.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowHelp(false)}
              className="mt-7 w-full bg-green-700 text-white py-3 rounded-xl font-bold hover:bg-green-800 transition cursor-pointer"
            >
              Back to Scenario
            </button>
          </div>
        </div>
      )}
    </div>
  );
}