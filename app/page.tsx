import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-green-50">
      <Navbar />

      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Practice Match Decisions
          <br />
          Before They Matter.
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Build confidence as a referee through realistic game scenarios.
        </p>

        <a
          href="/practice"
          className="mt-8 inline-block bg-green-700 text-white px-8 py-3 rounded-xl"
        >
          Start Practicing
        </a>
      </section>
    </main>
  );
}