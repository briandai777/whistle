import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAV */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-gray-950"
          >
            Whistle
          </Link>

          <Link
            href="/practice/setup"
            className="bg-green-700 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-800 transition"
          >
            Practice →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-green-700 font-bold text-sm uppercase tracking-wider">
            About Whistle
          </p>

          <h1 className="mt-4 text-5xl md:text-6xl font-extrabold tracking-tight text-gray-950">
            Better decisions come
            <br className="hidden md:block" /> from practice.
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Whistle is a free referee training tool built to give officials
            more opportunities to practice making decisions using real match
            situations.
          </p>
        </div>
      </section>

      {/* WHY WHISTLE */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div>
              <p className="text-green-700 font-bold text-sm uppercase tracking-wider">
                Why Whistle?
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-950">
                Refereeing is something you learn by making decisions.
              </h2>
            </div>

            <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
              <p>
                Referees are constantly asked to make difficult decisions in
                seconds. But outside of games, there are limited opportunities
                to repeatedly practice making those calls.
              </p>

              <p>
                That&apos;s why I started building Whistle.
              </p>

              <p>
                The idea is simple: watch a real match incident, decide what
                you would call on the field, and then compare your decision
                with an explanation of the play.
              </p>

              <p>
                Instead of only reading about refereeing, Whistle gives
                officials a way to practice the decision-making part of the
                job.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">

          <div className="text-center">
            <p className="text-green-700 font-bold text-sm uppercase tracking-wider">
              How It Works
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-gray-950">
              Watch. Decide. Learn.
            </h2>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">

            {/* WATCH */}
            <div className="border border-gray-200 rounded-2xl p-7">
              <div className="w-11 h-11 bg-green-100 text-green-800 rounded-xl flex items-center justify-center font-extrabold">
                1
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-gray-950">
                Watch
              </h3>

              <p className="mt-2 text-gray-600 leading-relaxed">
                Watch a short incident taken from a real soccer match.
              </p>
            </div>

            {/* DECIDE */}
            <div className="border border-gray-200 rounded-2xl p-7">
              <div className="w-11 h-11 bg-green-100 text-green-800 rounded-xl flex items-center justify-center font-extrabold">
                2
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-gray-950">
                Decide
              </h3>

              <p className="mt-2 text-gray-600 leading-relaxed">
                Make the decision you would make if you were the referee on
                the field.
              </p>
            </div>

            {/* LEARN */}
            <div className="border border-gray-200 rounded-2xl p-7">
              <div className="w-11 h-11 bg-green-100 text-green-800 rounded-xl flex items-center justify-center font-extrabold">
                3
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-gray-950">
                Learn
              </h3>

              <p className="mt-2 text-gray-600 leading-relaxed">
                See the decision and explanation, then move on to another
                situation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 py-20 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-green-700 font-bold text-sm uppercase tracking-wider">
            The Goal
          </p>

          <h2 className="mt-3 text-4xl font-extrabold text-gray-950">
            More confident referees.
          </h2>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Whistle&apos;s goal is not to replace referee courses, mentors,
            assignors, or official instruction. It&apos;s to give referees
            another way to practice between games and build confidence in
            their decision-making.
          </p>

          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Whistle is being built as a free educational resource and will
            continue improving based on feedback from referees and the wider
            referee community.
          </p>

        </div>
      </section>

      {/* BUILT FOR REFEREES */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">

          <div className="rounded-3xl border border-gray-200 bg-white p-8 md:p-12 text-center shadow-sm">

            <p className="text-green-700 font-bold text-sm uppercase tracking-wider">
              Built for Referees
            </p>

            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-950">
              Free to practice. No account required.
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
              Pick a session length, watch the scenarios, and start making
              calls. No signup, subscription, or complicated setup.
            </p>

            <Link
              href="/practice/setup"
              className="inline-block mt-8 bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition"
            >
              Start Practicing →
            </Link>

          </div>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-3xl font-extrabold text-gray-950">
            Help make Whistle better.
          </h2>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Whistle is still growing. Feedback from referees, assignors, and
            instructors helps shape what gets built next.
          </p>

          <a
            href="https://forms.gle/5xggCPduxxG39ft57"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-green-700 font-bold hover:text-green-800 transition"
          >
            Share Feedback →
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-5">

          {/* BRAND */}
          <Link
            href="/"
            className="font-extrabold text-gray-950 text-lg"
          >
            Whistle
          </Link>

          {/* LINKS */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-semibold text-gray-600">

            <Link
              href="/about"
              className="hover:text-green-700 transition"
            >
              About
            </Link>

            <a
              href="https://forms.gle/5xggCPduxxG39ft57"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-700 transition"
            >
              Feedback
            </a>

            <Link
              href="/legal"
              className="hover:text-green-700 transition"
            >
              Legal
            </Link>

            <a
              href="mailto:YOUR_EMAIL_HERE"
              className="hover:text-green-700 transition"
            >
              Contact
            </a>

          </div>
        </div>
      </footer>

    </main>
  );
}