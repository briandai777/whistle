"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { scenarios } from "../../../scenarios";

export default function PracticeSetup() {
  const router = useRouter();

  const availableLengths = [
  {
    label: "Quick",
    value: Math.min(5, scenarios.length),
    description: "A few quick decisions.",
  },
  {
    label: "Standard",
    value: Math.min(10, scenarios.length),
    description: "A balanced practice session.",
    recommended: true,
  },
  {
    label: "Full",
    value: scenarios.length,
    description: "Work through every scenario.",
  },
];

  const [selected, setSelected] = useState(
    Math.min(10, scenarios.length)
  );

  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const beginPractice = () => {
    const alreadySeen = sessionStorage.getItem(
      "whistle-instructions-seen"
    );

    if (alreadySeen === "true") {
      router.push(`/practice?count=${selected}`);
    } else {
      setShowDisclaimer(true);
    }
  };

  const acceptDisclaimer = () => {
    sessionStorage.setItem("whistle-instructions-seen", "true");

    router.push(`/practice?count=${selected}`);
  };

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-green-700 font-bold text-sm uppercase tracking-wider">
            Practice Setup
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-950">
            How long do you want to practice?
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            Pick a session length. You can always come back and do another.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {availableLengths.map((option) => {
            const active = selected === option.value;

            return (
              <button
                key={option.label}
                onClick={() => setSelected(option.value)}
                className={`relative text-left rounded-2xl border-2 p-7 transition-all cursor-pointer ${
                  active
                    ? "border-green-700 bg-green-50 shadow-md"
                    : "border-gray-200 bg-white hover:border-green-400 hover:shadow-sm"
                }`}
              >
                {option.recommended && (
                  <span className="absolute -top-3 left-5 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Recommended
                  </span>
                )}

                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-green-700 uppercase tracking-wider">
                      {option.label}
                    </p>

                    <p className="mt-2 text-4xl font-extrabold text-gray-950">
                      {option.value}
                    </p>

                    <p className="text-gray-700 font-semibold">
                      scenarios
                    </p>
                  </div>

                  <span
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      active
                        ? "border-green-700 bg-green-700"
                        : "border-gray-300"
                    }`}
                  >
                    {active && (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </span>
                </div>

               
                <p className="mt-6 text-gray-700">
                  {option.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <button
            onClick={beginPractice}
            className="w-full bg-green-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-green-800 transition shadow-sm cursor-pointer"
          >
            Start Session →
          </button>

          <p className="mt-3 text-center text-sm text-gray-500">
            No account needed.
          </p>
        </div>
      </div>

      {/* FIRST-TIME INSTRUCTIONS */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-5">
          <div className="bg-white rounded-3xl max-w-xl w-full p-7 md:p-9 shadow-2xl">
            <p className="text-green-700 font-bold text-sm uppercase tracking-wider">
              Before you start
            </p>

           <h2 className="text-2xl font-extrabold text-gray-950">
  A few things to know
</h2>

<div className="mt-6 space-y-6">

  {/* SOUND */}
  <div>
    <p className="font-bold text-gray-900">
      🔇 Turn off your sound
    </p>
    <p className="mt-1 text-gray-600 leading-relaxed">
      We recommend muting your device before starting. Some videos may contain
      commentary or audio that could reveal the decision before you make your call.
    </p>
  </div>

  {/* YOUTUBE */}
  <div>
    <p className="font-bold text-gray-900">
      🎥 Videos play through YouTube
    </p>
    <p className="mt-1 text-gray-600 leading-relaxed">
      Some YouTube controls may appear. If a clip looks blurry, you can use
      YouTube&apos;s quality setting to increase the resolution.
    </p>
  </div>

  {/* REPLAY */}
  <div>
    <p className="font-bold text-gray-900">
      🔁 Use Replay Incident
    </p>
    <p className="mt-1 text-gray-600 leading-relaxed">
      Use Whistle&apos;s Replay Incident button instead of restarting the full
      YouTube video.
    </p>
  </div>

  {/* MAKE THE CALL */}
  <div>
    <p className="font-bold text-gray-900">
      🧠 Make the call you&apos;d make on the field
    </p>
    <p className="mt-1 text-gray-600 leading-relaxed">
      Watch the whole incident before choosing your answer. You can replay it
      if you need another look.
    </p>
  </div>

  {/* JUDGMENT */}
  <div>
    <p className="font-bold text-gray-900">
      ⚖️ Some decisions involve judgment
    </p>
    <p className="mt-1 text-gray-600 leading-relaxed">
      Whistle is a practice tool, not an official ruling service. Match context
      and referee interpretation can matter.
    </p>
  </div>

</div>
            <button
              onClick={acceptDisclaimer}
              className="mt-8 w-full bg-green-700 text-white py-4 rounded-xl font-bold hover:bg-green-800 transition cursor-pointer"
            >
              Got it — Start Training →
            </button>

            <button
              onClick={() => setShowDisclaimer(false)}
              className="mt-3 w-full text-gray-600 font-semibold py-2 hover:text-gray-900 cursor-pointer"
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </main>
  );
}