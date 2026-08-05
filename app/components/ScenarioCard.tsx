"use client";

import { useState } from "react";

type Scenario = {
  videoId: string;
  startTime: number;
  endTime: number;
  question: string;
  choices: string[];
  correctAnswer: string;
  explanation: string;
};

export default function ScenarioCard({
  scenario,
}: {
  scenario: Scenario;
}) {
  const [reload, setReload] = useState(0);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 max-w-3xl mx-auto">

      <div className="aspect-video">
        <iframe
          key={reload}
          className="w-full h-full rounded-xl"
          src={`https://www.youtube.com/embed/${scenario.videoId}?start=${scenario.startTime}&end=${scenario.endTime}&autoplay=1`}
          title="Referee scenario"
          allow="autoplay; fullscreen"
        />
      </div>

      <button
        onClick={() => setReload(reload + 1)}
        className="mt-4 bg-green-700 text-white px-5 py-2 rounded-lg"
      >
        🔁 Replay Incident
      </button>

      <h2 className="text-xl font-bold mt-6">
        {scenario.question}
      </h2>

      <div className="mt-4 flex flex-col gap-3">
        {scenario.choices.map((choice) => (
          <button
            key={choice}
            className="border rounded-lg p-3 hover:bg-gray-100"
          >
            {choice}
          </button>
        ))}
      </div>

    </div>
  );
}