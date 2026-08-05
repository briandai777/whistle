import ScenarioCard from "../components/ScenarioCard";
import { scenarios } from "../../scenarios";

export default function Practice() {
  return (
    <main className="min-h-screen bg-green-50 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Referee Practice
      </h1>

      <ScenarioCard scenario={scenarios[0]} />
    </main>
  );
}