export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white border-b">
      <h1 className="text-2xl font-bold text-green-700">
        ⚽ Whistle
      </h1>

      <div className="flex gap-6 text-gray-700">
        <a href="/">Home</a>
        <a href="/practice">Practice</a>
      </div>
    </nav>
  );
}