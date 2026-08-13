export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white border-b">
      
      {/* LOGO */}
      <a href="/" className="flex items-center gap-2 group">
        <div className="w-9 h-9 bg-green-700 rounded-xl flex items-center justify-center group-hover:bg-green-800 transition">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
          >
            <path
              d="M4 14L9 9H16C18.7614 9 21 11.2386 21 14C21 16.7614 18.7614 19 16 19C13.2386 19 11 16.7614 11 14H4Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="16"
              cy="14"
              r="2"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M4 14L2 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <span className="text-2xl font-extrabold text-gray-950 tracking-tight">
          Whistle
        </span>
      </a>

      {/* NAVIGATION */}
      <div className="flex items-center gap-7 font-semibold text-gray-700">
        <a
          href="/"
          className="hover:text-green-700 transition"
        >
          Home
        </a>

        <a
          href="/practice/setup"
          className="bg-green-700 text-white px-5 py-2.5 rounded-xl hover:bg-green-800 transition"
        >
          Practice
        </a>
      </div>
    </nav>
  );
}