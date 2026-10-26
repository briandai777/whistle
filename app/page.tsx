
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Read the play",
    description:
      "Step into realistic match situations and study what happens on the field.",
    color: "bg-[#D8F36A]",
    text: "text-[#17251D]",
    icon: "◉",
  },
  {
    number: "02",
    title: "Make the call",
    description:
      "Decide what you would call as the referee before seeing the answer.",
    color: "bg-[#FF795E]",
    text: "text-white",
    icon: "↗",
  },
  {
    number: "03",
    title: "Learn the why",
    description:
      "Understand the laws of the game and build confidence for your next match.",
    color: "bg-[#B9B1FF]",
    text: "text-[#17251D]",
    icon: "✳",
  },
];

function PitchGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-[510px]">
      <div className="absolute -right-3 -top-5 z-10 rotate-6 rounded-full bg-[#FF795E] px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-lg sm:-right-5">
        Your next call starts here
      </div>

      <div className="relative overflow-hidden rounded-[1.75rem] border-[5px] border-[#17251D] bg-[#377A4D] shadow-[10px_10px_0px_#17251D]">
        <svg
          viewBox="0 0 480 350"
          className="block w-full"
          role="img"
          aria-label="Illustrated soccer pitch with a referee decision marker"
        >
          <rect width="480" height="350" fill="#377A4D" />
          {Array.from({ length: 6 }, (_, i) => (
            <rect
              key={i}
              x={i * 80}
              y="0"
              width="80"
              height="350"
              fill={i % 2 === 0 ? "#438B58" : "#377A4D"}
            />
          ))}
          <rect
            x="20"
            y="20"
            width="440"
            height="310"
            rx="2"
            fill="none"
            stroke="#F4F1E7"
            strokeWidth="2"
          />
          <line
            x1="240"
            y1="20"
            x2="240"
            y2="330"
            stroke="#F4F1E7"
            strokeWidth="2"
          />
          <circle
            cx="240"
            cy="175"
            r="49"
            fill="none"
            stroke="#F4F1E7"
            strokeWidth="2"
          />
          <circle cx="240" cy="175" r="3" fill="#F4F1E7" />
          <rect
            x="20"
            y="100"
            width="70"
            height="150"
            fill="none"
            stroke="#F4F1E7"
            strokeWidth="2"
          />
          <rect
            x="20"
            y="137"
            width="27"
            height="76"
            fill="none"
            stroke="#F4F1E7"
            strokeWidth="2"
          />
          <rect
            x="390"
            y="100"
            width="70"
            height="150"
            fill="none"
            stroke="#F4F1E7"
            strokeWidth="2"
          />
          <rect
            x="433"
            y="137"
            width="27"
            height="76"
            fill="none"
            stroke="#F4F1E7"
            strokeWidth="2"
          />
          <path
            d="M 90 120 Q 135 130 165 175"
            fill="none"
            stroke="#D8F36A"
            strokeWidth="4"
            strokeDasharray="7 7"
          />
          <path
            d="M 165 175 L 150 162 M 165 175 L 146 181"
            fill="none"
            stroke="#D8F36A"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 300 220 L 345 165"
            fill="none"
            stroke="#FF795E"
            strokeWidth="4"
            strokeDasharray="7 7"
          />
          <circle cx="165" cy="175" r="15" fill="#D8F36A" stroke="#17251D" strokeWidth="3" />
          <circle cx="300" cy="220" r="15" fill="#FF795E" stroke="#17251D" strokeWidth="3" />
          <circle cx="345" cy="165" r="20" fill="#F4F1E7" stroke="#17251D" strokeWidth="3" />
          <path d="M345 153 L354 160 L351 173 L339 177 L334 165 Z" fill="#17251D" />
          <path d="M345 153 L345 165 L354 160 M345 165 L339 177 M345 165 L334 165" fill="none" stroke="#F4F1E7" strokeWidth="1.5" />
          <g transform="translate(215 75) rotate(-12)">
            <circle cx="0" cy="0" r="12" fill="#17251D" />
            <path d="M-9 14 L9 14 L15 51 L-15 51 Z" fill="#17251D" />
            <path d="M-9 51 L-13 82 L-4 82 L3 54 M9 51 L15 80 L24 80 L16 49" fill="#17251D" />
            <path d="M-9 19 L-28 38 L-24 43 L-4 29 M9 19 L27 30 L30 24 L12 12" fill="#17251D" />
            <path d="M-4 -11 L-2 -18 L7 -18 L11 -10" fill="#FF795E" />
          </g>
          <g transform="translate(265 70)">
            <rect width="118" height="34" rx="17" fill="#F4F1E7" />
            <circle cx="17" cy="17" r="5" fill="#FF795E" />
            <text x="30" y="21" fill="#17251D" fontSize="11" fontWeight="800">
              DECISION TIME
            </text>
          </g>
          <text x="35" y="312" fill="#F4F1E7" fontSize="10" fontWeight="700" letterSpacing="2">
            OBSERVE. DECIDE. LEARN.
          </text>
        </svg>
      </div>

      <div className="absolute -bottom-5 -left-3 flex h-[76px] w-[76px] rotate-[-10deg] items-center justify-center rounded-2xl border-[3px] border-[#17251D] bg-[#D8F36A] text-4xl shadow-[4px_4px_0px_#17251D] sm:-left-5">
        ⚑
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F4F1E7] text-[#17251D]">
      {/* Navigation */}
      <nav className="border-b border-[#17251D]/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D8F36A] text-xl font-black">
              w.
            </span>
            <span className="text-2xl font-black tracking-tight">whistle</span>
          </Link>

          <div className="flex items-center gap-5 sm:gap-8">
            <Link
              href="/about"
              className="text-sm font-semibold transition hover:text-[#438B58]"
            >
              About
            </Link>
            <Link
              href="/practice/setup"
              className="rounded-full bg-[#17251D] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#377A4D] sm:px-6"
            >
              Start practicing <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-[#D8F36A]/50 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-48 h-56 w-56 rounded-full bg-[#B9B1FF]/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#17251D]/15 bg-white/60 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em]">
              <span className="h-2 w-2 rounded-full bg-[#438B58]" />
              Built for the beautiful game
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-[0.99] tracking-[-0.055em] sm:text-7xl xl:text-[5.5rem]">
              See the play.
              <span className="mt-2 block text-[#377A4D]">Make the call.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#17251D]/70">
              Great referees aren’t born ready. They get better one decision at
              a time. Practice real match situations, sharpen your judgment, and
              take the field with confidence.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/practice/setup"
                className="group inline-flex items-center gap-3 rounded-full bg-[#FF795E] px-7 py-4 font-extrabold text-white shadow-[5px_5px_0px_#17251D] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#17251D]"
              >
                Get on the field
                <span className="text-xl transition group-hover:translate-x-1">→</span>
              </Link>
              <span className="text-sm font-semibold text-[#17251D]/55">
                Free. No account needed.
              </span>
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-[#17251D]/15 pt-6">
              <div className="flex -space-x-2">
                {["bg-[#D8F36A]", "bg-[#FF795E]", "bg-[#B9B1FF]", "bg-[#438B58]"].map(
                  (color, i) => (
                    <span
                      key={color}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F4F1E7] ${color} text-sm font-black ${i === 3 ? "text-white" : "text-[#17251D]"}`}
                    >
                      {["R", "⚑", "↗", "✓"][i]}
                    </span>
                  )
                )}
              </div>
              <div>
                <p className="text-xl font-black">750+ users</p>
                <p className="text-sm text-[#17251D]/60">
                  Referees learning to call it right
                </p>
              </div>
            </div>
          </div>

          <PitchGraphic />
        </div>
      </section>

      {/* Color ticker */}
      <div className="overflow-hidden border-y-[3px] border-[#17251D] bg-[#D8F36A] py-4">
        <div className="flex min-w-max items-center justify-around gap-8 text-sm font-black uppercase tracking-[0.18em] sm:gap-14">
          <span>Read the game</span><span>✳</span>
          <span>Trust your judgment</span><span>✳</span>
          <span>Know the laws</span><span>✳</span>
          <span>Read the game</span><span>✳</span>
          <span>Trust your judgment</span><span>✳</span>
        </div>
      </div>

      {/* How it works */}
      <section className="px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[#377A4D]">
                The training ground
              </p>
              <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                Every call is a chance to get better.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-[#17251D]/65">
              No lectures from the sidelines. Just practical scenarios that
              help you think like a referee.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className={`${step.color} ${step.text} group relative flex min-h-[285px] flex-col overflow-hidden rounded-[1.5rem] border-[3px] border-[#17251D] p-7 shadow-[6px_6px_0px_#17251D] transition duration-200 hover:-translate-y-1 hover:shadow-[9px_9px_0px_#17251D]`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-black tracking-widest">
                    STEP {step.number}
                  </span>
                  <span className="text-4xl transition duration-300 group-hover:rotate-12">
                    {step.icon}
                  </span>
                </div>
                <div className="mt-auto pt-12">
                  <h3 className="text-3xl font-black tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs leading-7 opacity-80">
                    {step.description}
                  </p>
                </div>
                <span className="pointer-events-none absolute -bottom-14 -right-5 text-[150px] font-black leading-none opacity-[0.07]">
                  {step.number}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Whistle */}
      <section className="bg-[#17251D] px-6 py-20 text-[#F4F1E7] sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[#D8F36A]">
              Why Whistle?
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Confidence doesn’t come from guessing.
              <span className="text-[#D8F36A]"> It comes from practice.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">
              The hardest calls happen in a split second. Whistle gives you a
              place to slow the game down, think through your decisions, and
              learn without the pressure of a live match.
            </p>
            <Link
              href="/practice/setup"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#D8F36A] px-6 py-4 font-extrabold text-[#17251D] transition hover:bg-white"
            >
              Practice your next call <span>↗</span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-3 -top-4 h-20 w-20 rounded-full bg-[#FF795E] sm:-right-5" />
            <div className="relative rounded-[1.75rem] border-[3px] border-white/20 bg-[#263C2E] p-6 sm:p-9">
              <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-5">
                <span className="text-sm font-extrabold uppercase tracking-widest text-white/60">
                  The referee’s mindset
                </span>
                <span className="rounded-full bg-[#D8F36A] px-3 py-1 text-xs font-black text-[#17251D]">
                  STAY SHARP
                </span>
              </div>
              <div className="space-y-7">
                {[
                  ["01", "Positioning", "Be in the right place to see the incident."],
                  ["02", "Interpretation", "Apply the Laws of the Game to what you see."],
                  ["03", "Decision", "Make a clear, confident call."],
                ].map(([number, title, description], i) => (
                  <div key={number} className="flex gap-5">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black ${
                        i === 0
                          ? "bg-[#D8F36A] text-[#17251D]"
                          : i === 1
                            ? "bg-[#FF795E] text-white"
                            : "bg-[#B9B1FF] text-[#17251D]"
                      }`}
                    >
                      {number}
                    </span>
                    <div>
                      <h3 className="text-xl font-extrabold">{title}</h3>
                      <p className="mt-1 leading-6 text-white/60">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl border border-dashed border-white/25 p-4 text-sm text-white/55">
                Good decisions start with good preparation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final call to action */}
      <section className="px-6 py-20 sm:px-8 sm:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border-[3px] border-[#17251D] bg-[#B9B1FF] px-7 py-12 shadow-[8px_8px_0px_#17251D] sm:px-14 sm:py-16 lg:px-20">
          <div className="pointer-events-none absolute -right-8 -top-12 text-[210px] font-black leading-none text-[#17251D]/[0.07] sm:text-[300px]">
            !
          </div>
          <div className="relative max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em]">
              Your next match starts now
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Ready to make the right call?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#17251D]/70">
              Build your knowledge, sharpen your instincts, and step onto the
              pitch ready for whatever comes your way.
            </p>
            <Link
              href="/practice/setup"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17251D] px-7 py-4 font-extrabold text-white transition hover:bg-[#377A4D]"
            >
              Start training for free <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feedback and footer */}
      <section className="border-t border-[#17251D]/15 px-6 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-extrabold">Help make Whistle better.</p>
            <p className="mt-1 text-sm text-[#17251D]/60">
              Have an idea or spotted something we can improve?
            </p>
          </div>
          <a
            href="https://forms.gle/5xggCPduxxG39ft57"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#17251D] px-5 py-3 text-sm font-extrabold transition hover:bg-[#D8F36A]"
          >
            Share feedback <span>↗</span>
          </a>
        </div>
      </section>

      <footer className="bg-[#17251D] px-6 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-2xl font-black tracking-tight">
            whistle<span className="text-[#D8F36A]">.</span>
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
            <Link href="/about" className="transition hover:text-[#D8F36A]">
              About
            </Link>
            <Link href="/legal" className="transition hover:text-[#D8F36A]">
              Legal
            </Link>
            <a
              href="mailto:brianxdai@gmail.com"
              className="transition hover:text-[#D8F36A]"
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
