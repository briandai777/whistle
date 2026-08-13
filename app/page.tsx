import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* NAV */}
      <nav className="border-b border-green-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-green-800"
          >
            Whistle
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/about"
              className="hidden sm:block text-sm font-semibold text-gray-600 hover:text-green-700 transition"
            >
              About
            </Link>

            <Link
              href="/practice/setup"
              className="bg-green-700 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-800 transition shadow-sm"
            >
              Practice →
            </Link>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 pt-24 pb-20 bg-gradient-to-b from-green-100 via-green-50 to-white">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center rounded-full bg-white border border-green-200 px-4 py-2 text-sm font-bold text-green-700 shadow-sm">
            Free referee decision-making practice
          </div>

          <h1 className="mt-7 text-5xl md:text-7xl font-extrabold tracking-tight text-gray-950 leading-[1.05]">
            See the play.
            <br />
            <span className="text-green-700">
              Make the call.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Practice making referee decisions with real match situations.
            Watch the incident, make your call, and learn from each scenario.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/practice/setup"
              className="bg-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-800 transition shadow-sm"
            >
              Start Practicing →
            </Link>

            <Link
              href="/about"
              className="border-2 border-green-200 bg-white text-green-800 px-8 py-4 rounded-xl font-bold text-lg hover:border-green-500 hover:bg-green-50 transition"
            >
              About Whistle
            </Link>
          </div>

          <p className="mt-5 text-sm font-medium text-gray-500">
            Free · No account required
          </p>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-20 bg-green-50">
        <div className="max-w-5xl mx-auto">

          <div className="text-center">
            <p className="text-green-700 font-bold text-sm uppercase tracking-wider">
              How It Works
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-gray-950">
              Referee practice, simplified.
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              No long setup. Just real situations and decisions.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">

            {/* WATCH */}
            <div className="bg-white border border-green-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 bg-green-100 text-green-800 rounded-xl flex items-center justify-center font-extrabold">
                1
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-gray-950">
                Watch the incident
              </h3>

              <p className="mt-2 text-gray-600 leading-relaxed">
                Watch a short clip from a real soccer match and focus on the
                decision you would make.
              </p>
            </div>

            {/* DECIDE */}
            <div className="bg-white border border-green-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 bg-green-200 text-green-900 rounded-xl flex items-center justify-center font-extrabold">
                2
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-gray-950">
                Make the call
              </h3>

              <p className="mt-2 text-gray-600 leading-relaxed">
                Choose the decision you would make if you were the referee on
                the field.
              </p>
            </div>

            {/* LEARN */}
            <div className="bg-white border border-green-200 rounded-2xl p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="w-11 h-11 bg-green-300 text-green-950 rounded-xl flex items-center justify-center font-extrabold">
                3
              </div>

              <h3 className="mt-5 text-xl font-extrabold text-gray-950">
                Learn from it
              </h3>

              <p className="mt-2 text-gray-600 leading-relaxed">
                Compare your call with the decision and explanation before
                moving to the next scenario.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY WHISTLE */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            <div>
              <p className="text-green-700 font-bold text-sm uppercase tracking-wider">
                Built for Referees
              </p>

              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950">
                Practice the part of refereeing that happens in seconds.
              </h2>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Reading the Laws matters. But during a match, referees also
                have to recognize what happened and make a decision quickly.
                Whistle gives you another way to practice that process between
                games.
              </p>

              <Link
                href="/about"
                className="inline-block mt-6 text-green-700 font-bold hover:text-green-800 transition"
              >
                Why I built Whistle →
              </Link>
            </div>

            {/* FEATURE CARD */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-3xl p-8 md:p-10">

              <div className="space-y-7">

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-green-200 flex items-center justify-center shadow-sm">
                    🎥
                  </div>

                  <div>
                    <h3 className="font-extrabold text-gray-950">
                      Real match situations
                    </h3>

                    <p className="mt-1 text-gray-600">
                      Practice with situations taken from actual soccer
                      matches.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-green-200 flex items-center justify-center shadow-sm">
                    🔁
                  </div>

                  <div>
                    <h3 className="font-extrabold text-gray-950">
                      Replay when you need it
                    </h3>

                    <p className="mt-1 text-gray-600">
                      Watch an incident again before committing to your
                      decision.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-green-200 flex items-center justify-center shadow-sm">
                    💡
                  </div>

                  <div>
                    <h3 className="font-extrabold text-gray-950">
                      Immediate explanations
                    </h3>

                    <p className="mt-1 text-gray-600">
                      See the decision and reasoning after making your call.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-green-200 flex items-center justify-center shadow-sm">
                    ✓
                  </div>

                  <div>
                    <h3 className="font-extrabold text-gray-950">
                      Simple and free
                    </h3>

                    <p className="mt-1 text-gray-600">
                      No account, subscription, or complicated setup required.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-green-800">
        <div className="max-w-3xl mx-auto text-center">

          <p className="text-green-200 font-bold text-sm uppercase tracking-wider">
            Ready?
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Put yourself in the referee&apos;s position.
          </h2>

          <p className="mt-5 text-lg text-green-100 leading-relaxed max-w-2xl mx-auto">
            Choose how many scenarios you want to practice and start making
            calls.
          </p>

          <Link
            href="/practice/setup"
            className="inline-block mt-8 bg-white text-green-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition shadow-sm"
          >
            Start a Practice Session →
          </Link>

        </div>
      </section>

      {/* FEEDBACK */}
      <section className="px-6 py-16 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">

          <h2 className="text-2xl font-extrabold text-gray-950">
            Help make Whistle better.
          </h2>

          <p className="mt-3 text-gray-600 leading-relaxed">
            Whistle is still growing. If something could be clearer, more
            useful, or easier to use, I&apos;d love to hear about it.
          </p>

          <a
            href="https://forms.gle/5xggCPduxxG39ft57"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-white border border-green-200 text-green-700 px-5 py-2.5 rounded-xl font-bold hover:bg-green-100 transition"
          >
            Share Feedback →
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-green-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-5">

          <Link
            href="/"
            className="font-extrabold text-green-800 text-lg"
          >
            Whistle
          </Link>

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
              href="mailto:brianxdai@gmail.com"
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