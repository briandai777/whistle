
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Read the play",
    description:
      "Step into realistic match situations and study what happens on the field.",
    color: "bg-[#DCE3D0]",
    text: "text-[#25352B]",
    icon: "◉",
  },
  {
    number: "02",
    title: "Make the call",
    description:
      "Decide what you would call as the referee before seeing the answer.",
    color: "bg-[#DCC0B7]",
    text: "text-[#25352B]",
    icon: "↗",
  },
  {
    number: "03",
    title: "Learn the why",
    description:
      "Understand the laws of the game and build confidence for your next match.",
    color: "bg-[#D2CEDB]",
    text: "text-[#25352B]",
    icon: "✳",
  },
];

function PitchGraphic() {
  return (
    <div className="relative mx-auto w-full max-w-[510px]">
      <div className="absolute -right-2 -top-4 z-10 rotate-3 rounded-full bg-[#DCC0B7] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#25352B] shadow-md sm:-right-4">
        Your next call starts here
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border-[4px] border-[#25352B] bg-[#66836B] shadow-[8px_8px_0px_#25352B]">
        <svg
          viewBox="0 0 480 350"
          className="block w-full"
          role="img"
          aria-label="Illustrated soccer field showing player movement and a soccer ball"
        >
          <rect width="480" height="350" fill="#66836B" />

          {Array.from({ length: 6 }, (_, i) => (
            <rect
              key={i}
              x={i * 80}
              y="0"
              width="80"
              height="350"
              fill={i % 2 === 0 ? "#718D75" : "#66836B"}
            />
          ))}

          <g
            fill="none"
            stroke="#EAE9DF"
            strokeWidth="2"
            opacity="0.9"
          >
            <rect x="20" y="20" width="440" height="310" />
            <line x1="240" y1="20" x2="240" y2="330" />
            <circle cx="240" cy="175" r="49" />
            <circle cx="240" cy="175" r="3" fill="#EAE9DF" />
            <rect x="20" y="100" width="70" height="150" />
            <rect x="20" y="137" width="27" height="76" />
            <rect x="390" y="100" width="70" height="150" />
            <rect x="433" y="137" width="27" height="76" />
          </g>

          <path
            d="M 90 120 Q 135 130 165 175"
            fill="none"
            stroke="#DCE3D0"
            strokeWidth="4"
            strokeDasharray="7 7"
          />

          <path
            d="M 165 175 L 150 162 M 165 175 L 146 181"
            fill="none"
            stroke="#DCE3D0"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M 300 220 L 345 165"
            fill="none"
            stroke="#DCC0B7"
            strokeWidth="4"
            strokeDasharray="7 7"
          />

          <circle
            cx="165"
            cy="175"
            r="14"
            fill="#DCE3D0"
            stroke="#25352B"
            strokeWidth="3"
          />

          <circle
            cx="300"
            cy="220"
            r="14"
            fill="#DCC0B7"
            stroke="#25352B"
            strokeWidth="3"
          />

          {/* Soccer ball */}
          <circle
            cx="345"
            cy="165"
            r="20"
            fill="#EAE9DF"
            stroke="#25352B"
            strokeWidth="3"
          />
          <path
            d="M345 153 L354 160 L351 173 L339 177 L334 165 Z"
            fill="#25352B"
          />
          <path
            d="M345 153 L345 165 L354 160 M345 165 L339 177 M345 165 L334 165"
            fill="none"
            stroke="#EAE9DF"
            strokeWidth="1.5"
          />

          {/* Subtle field annotation */}
          <g transform="translate(34 38)">
            <rect
              width="106"
              height="28"
              rx="14"
              fill="#25352B"
              opacity="0.88"
            />
            <circle cx="14" cy="14" r="4" fill="#DCE3D0" />
            <text
              x="25"
              y="18"
              fill="#EAE9DF"
              fontSize="10"
              fontWeight="700"
              letterSpacing="1"
            >
              MATCH VIEW
            </text>
          </g>

          <text
            x="35"
            y="312"
            fill="#EAE9DF"
            fontSize="10"
            fontWeight="700"
            letterSpacing="2"
          >
            OBSERVE. DECIDE. LEARN.
          </text>
        </svg>
      </div>

      <div className="absolute -bottom-4 -left-3 flex h-[68px] w-[68px] rotate-[-8deg] items-center justify-center rounded-2xl border-[3px] border-[#25352B] bg-[#DCE3D0] text-3xl shadow-[3px_3px_0px_#25352B] sm:-left-4">
        ⚑
      </div>
    </div>
  );
}

export default function Home() {
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

          <div className="flex items-center gap-5 sm:gap-8">
            <Link
              href="/about"
              className="text-sm font-semibold transition hover:text-[#66836B]"
            >
              About
            </Link>
            <Link
              href="/practice/setup"
              className="rounded-full bg-[#25352B] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#526F58] sm:px-6"
            >
              Start practicing <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute -left-24 top-12 h-64 w-64 rounded-full bg-[#DCE3D0]/70 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-48 h-56 w-56 rounded-full bg-[#D2CEDB]/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#25352B]/15 bg-white/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em]">
              <span className="h-2 w-2 rounded-full bg-[#66836B]" />
              Built for the beautiful game
            </div>

            <h1 className="max-w-xl text-5xl font-black leading-[0.99] tracking-[-0.055em] sm:text-7xl xl:text-[5.5rem]">
              See the play.
              <span className="mt-2 block text-[#66836B]">
                Make the call.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-[#25352B]/70">
              Great referees aren’t born ready. They get better one decision at
              a time. Practice real match situations, sharpen your judgment, and
              take the field with confidence.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/practice/setup"
                className="group inline-flex items-center gap-3 rounded-full bg-[#B97867] px-7 py-4 font-bold text-white shadow-[4px_4px_0px_#25352B] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#25352B]"
              >
                Get on the field
                <span className="text-xl transition group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <span className="text-sm font-semibold text-[#25352B]/55">
                Free. No account needed.
              </span>
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-[#25352B]/15 pt-6">
              <div className="flex -space-x-2">
                {[
                  "bg-[#DCE3D0]",
                  "bg-[#DCC0B7]",
                  "bg-[#D2CEDB]",
                  "bg-[#66836B]",
                ].map((color, i) => (
                  <span
                    key={color}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#F0EDE4] ${color} text-sm font-black ${
                      i === 3 ? "text-white" : "text-[#25352B]"
                    }`}
                  >
                    {["R", "⚑", "↗", "✓"][i]}
                  </span>
                ))}
              </div>
              <div>
                <p className="text-xl font-black">750+ users</p>
                <p className="text-sm text-[#25352B]/60">
                  Referees learning to call it right
                </p>
              </div>
            </div>
          </div>

          <PitchGraphic />
        </div>
      </section>

      {/* Divider ticker */}
      <div className="overflow-hidden border-y-2 border-[#25352B]/80 bg-[#DCE3D0] py-4">
        <div className="flex min-w-max items-center justify-around gap-8 text-sm font-bold uppercase tracking-[0.18em] sm:gap-14">
          <span>Read the game</span>
          <span>✳</span>
          <span>Trust your judgment</span>
          <span>✳</span>
          <span>Know the laws</span>
          <span>✳</span>
          <span>Read the game</span>
          <span>✳</span>
          <span>Trust your judgment</span>
          <span>✳</span>
        </div>
      </div>

      {/* How it works */}
      <section className="px-6 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#66836B]">
                The training ground
              </p>
              <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                Every call is a chance to get better.
              </h2>
            </div>
            <p className="max-w-sm leading-7 text-[#25352B]/65">
              No lectures from the sidelines. Just practical scenarios that
              help you think like a referee.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.number}
                className={`${step.color} ${step.text} group relative flex min-h-[285px] flex-col overflow-hidden rounded-[1.5rem] border-2 border-[#25352B]/80 p-7 shadow-[5px_5px_0px_#25352B] transition duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_#25352B]`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold tracking-widest">
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

                <span className="pointer-events-none absolute -bottom-14 -right-5 text-[150px] font-black leading-none opacity-[0.06]">
                  {step.number}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Whistle */}
      <section className="bg-[#25352B] px-6 py-20 text-[#F0EDE4] sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#C7D5B5]">
              Why Whistle?
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Confidence doesn’t come from guessing.
              <span className="text-[#C7D5B5]">
                {" "}
                It comes from practice.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">
              The hardest calls happen in a split second. Whistle gives you a
              place to slow the game down, think through your decisions, and
              learn without the pressure of a live match.
            </p>

            <Link
              href="/practice/setup"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#C7D5B5] px-6 py-4 font-bold text-[#25352B] transition hover:bg-[#F0EDE4]"
            >
              Practice your next call <span>↗</span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-3 -top-4 h-20 w-20 rounded-full bg-[#B97867] sm:-right-5" />

            <div className="relative rounded-[1.75rem] border-2 border-white/15 bg-[#304437] p-6 sm:p-9">
              <div className="mb-8 flex items-center justify-between border-b border-white/15 pb-5">
                <span className="text-sm font-bold uppercase tracking-widest text-white/60">
                  The referee’s mindset
                </span>
                <span className="rounded-full bg-[#C7D5B5] px-3 py-1 text-xs font-bold text-[#25352B]">
                  STAY SHARP
                </span>
              </div>

              <div className="space-y-7">
                {[
                  [
                    "01",
                    "Positioning",
                    "Be in the right place to see the incident.",
                  ],
                  [
                    "02",
                    "Interpretation",
                    "Apply the Laws of the Game to what you see.",
                  ],
                  [
                    "03",
                    "Decision",
                    "Make a clear, confident call.",
                  ],
                ].map(([number, title, description], i) => (
                  <div key={number} className="flex gap-5">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black ${
                        i === 0
                          ? "bg-[#C7D5B5] text-[#25352B]"
                          : i === 1
                            ? "bg-[#DCC0B7] text-[#25352B]"
                            : "bg-[#D2CEDB] text-[#25352B]"
                      }`}
                    >
                      {number}
                    </span>

                    <div>
                      <h3 className="text-xl font-bold">{title}</h3>
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
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border-2 border-[#25352B]/80 bg-[#D2CEDB] px-7 py-12 shadow-[7px_7px_0px_#25352B] sm:px-14 sm:py-16 lg:px-20">
          <div className="pointer-events-none absolute -right-8 -top-12 text-[210px] font-black leading-none text-[#25352B]/[0.06] sm:text-[300px]">
            !
          </div>

          <div className="relative max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
              Your next match starts now
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Ready to make the right call?
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#25352B]/70">
              Build your knowledge, sharpen your instincts, and step onto the
              pitch ready for whatever comes your way.
            </p>

            <Link
              href="/practice/setup"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25352B] px-7 py-4 font-bold text-white transition hover:bg-[#526F58]"
            >
              Start training for free <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section className="border-t border-[#25352B]/15 px-6 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold">Help make Whistle better.</p>
            <p className="mt-1 text-sm text-[#25352B]/60">
              Have an idea or spotted something we can improve?
            </p>
          </div>

          <a
            href="https://forms.gle/5xggCPduxxG39ft57"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-[#25352B] px-5 py-3 text-sm font-bold transition hover:bg-[#DCE3D0]"
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

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/65">
            <Link
              href="/about"
              className="transition hover:text-[#C7D5B5]"
            >
              About
            </Link>
            <Link
              href="/legal"
              className="transition hover:text-[#C7D5B5]"
            >
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
