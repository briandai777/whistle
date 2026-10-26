
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Watch",
    description:
      "Watch a short incident taken from a real soccer match.",
    color: "bg-[#DCE3D0]",
  },
  {
    number: "02",
    title: "Decide",
    description:
      "Make the decision you would make if you were the referee on the field.",
    color: "bg-[#DCC0B7]",
  },
  {
    number: "03",
    title: "Learn",
    description:
      "See the decision and explanation, then move on to another situation.",
    color: "bg-[#D2CEDB]",
  },
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F0EDE4] text-[#25352B]">
      {/* Navigation */}
      <nav className="border-b border-[#25352B]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DCE3D0] text-xl font-black">
              w.
            </span>
            <span className="text-2xl font-black tracking-tight">
              whistle
            </span>
          </Link>

          <Link
            href="/practice/setup"
            className="rounded-full bg-[#25352B] px-5 py-3 font-bold text-white transition hover:bg-[#526F58]"
          >
            Practice <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
        <div className="pointer-events-none absolute -right-16 top-8 h-64 w-64 rounded-full bg-[#D2CEDB]/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#DCE3D0]/70 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#25352B]/15 bg-white/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
            <span className="h-2 w-2 rounded-full bg-[#66836B]" />
            About Whistle
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.05em] sm:text-7xl">
            Better decisions come
            <span className="block text-[#66836B]">
              from practice.
            </span>
          </h1>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-2xl text-lg leading-8 text-[#25352B]/70 sm:text-xl">
              Whistle is a free referee training tool built to give officials
              more opportunities to practice making decisions using real match
              situations.
            </p>

            <div className="flex items-center gap-3 rounded-2xl border border-[#25352B]/10 bg-white/60 px-5 py-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#DCE3D0] text-xl">
                ⚑
              </span>
              <div>
                <p className="text-lg font-black">750+</p>
                <p className="text-sm text-[#25352B]/60">Users on Whistle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Whistle */}
      <section className="bg-[#E7E7DC] px-6 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#66836B]">
              Why Whistle?
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Refereeing is something you learn by making decisions.
            </h2>

            <div className="mt-8 h-1.5 w-20 rounded-full bg-[#B97867]" />
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#25352B]/75">
            <p>
              Referees are constantly asked to make difficult decisions in
              seconds. But outside of games, there are limited opportunities
              to repeatedly practice making those calls.
            </p>

            <p className="font-bold text-[#25352B]">
              That&apos;s why I started building Whistle.
            </p>

            <p>
              The idea is simple: watch a real match incident, decide what you
              would call on the field, and then compare your decision with an
              explanation of the play.
            </p>

            <p>
              Instead of only reading about refereeing, Whistle gives officials
              a way to practice the decision-making part of the job.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#66836B]">
              How it works
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-6xl">
              Watch. Decide. Learn.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#25352B]/65">
              A simple way to turn match situations into opportunities to
              improve.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className={`${step.color} group relative flex min-h-[265px] flex-col overflow-hidden rounded-[1.5rem] border-2 border-[#25352B]/75 p-7 shadow-[5px_5px_0px_#25352B] transition duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#25352B]`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold tracking-widest">
                    STEP {step.number}
                  </span>
                  <span className="text-3xl transition group-hover:rotate-12">
                    {step.number === "01"
                      ? "◉"
                      : step.number === "02"
                        ? "↗"
                        : "✳"}
                  </span>
                </div>

                <div className="mt-auto pt-10">
                  <h3 className="text-3xl font-black">{step.title}</h3>
                  <p className="mt-3 leading-7 text-[#25352B]/75">
                    {step.description}
                  </p>
                </div>

                <span className="pointer-events-none absolute -bottom-12 -right-3 text-8xl font-black text-[#25352B]/[0.06]">
                  {step.number}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#25352B] px-6 py-20 text-[#F0EDE4] sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#C7D5B5]">
            The goal
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            More confident referees.
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/15 bg-white/[0.04] p-6">
              <p className="text-lg leading-8 text-white/75">
                Whistle&apos;s goal is not to replace referee courses, mentors,
                assignors, or official instruction. It&apos;s to give referees
                another way to practice between games and build confidence in
                their decision-making.
              </p>
            </div>

            <div className="rounded-2xl bg-[#304437] p-6">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C7D5B5] text-xl text-[#25352B]">
                ✳
              </span>
              <p className="text-lg leading-8 text-white/75">
                Whistle is being built as a free educational resource and will
                continue improving based on feedback from referees and the
                wider referee community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice CTA */}
      <section className="px-6 py-20 sm:px-8 sm:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border-2 border-[#25352B]/75 bg-[#D2CEDB] px-7 py-12 shadow-[7px_7px_0px_#25352B] sm:px-14 sm:py-16 lg:px-20">
          <span className="pointer-events-none absolute -right-6 -top-12 text-[220px] font-black leading-none text-[#25352B]/[0.06]">
            w.
          </span>

          <div className="relative max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              Built for referees
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
              Free to practice. No account required.
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#25352B]/70">
              Pick a session length, watch the scenarios, and start making
              calls. No signup, subscription, or complicated setup.
            </p>

            <Link
              href="/practice/setup"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25352B] px-7 py-4 text-lg font-bold text-white transition hover:bg-[#526F58]"
            >
              Start practicing <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="px-6 pb-20 sm:px-8">
        <div className="mx-auto max-w-3xl border-t border-[#25352B]/15 pt-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#66836B]">
            Get involved
          </p>

          <h2 className="mt-4 text-3xl font-black sm:text-4xl">
            Help make Whistle better.
          </h2>

          <p className="mt-4 text-lg leading-8 text-[#25352B]/65">
            Whistle is still growing. Feedback from referees, assignors, and
            instructors helps shape what gets built next.
          </p>

          <a
            href="https://forms.gle/5xggCPduxxG39ft57"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#25352B] px-6 py-3 font-bold transition hover:bg-[#DCE3D0]"
          >
            Share feedback <span>↗</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#25352B] px-6 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight">
            whistle<span className="text-[#C7D5B5]">.</span>
          </Link>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/65">
            <Link href="/about" className="transition hover:text-[#C7D5B5]">
              About
            </Link>

            <a
              href="https://forms.gle/5xggCPduxxG39ft57"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#C7D5B5]"
            >
              Feedback
            </a>

            <Link href="/legal" className="transition hover:text-[#C7D5B5]">
              Legal
            </Link>

            <a
              href="mailto:brianxdai@gmail.com"
              className="transition hover:text-[#C7D5B5]"
            >
              Contact
            </a>
          </div>

          <p className="text-xs text-white/40">
            Built for the people who keep the game fair.
          </p>
        </div>
      </footer>
    </main>
  );
}
