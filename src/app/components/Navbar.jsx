import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold">
          SD
        </Link>
        <ul className="flex flex-row gap-6">
          <li>
            <Link href="/" className="hover:text-indigo-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-indigo-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="hover:text-indigo-500 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-indigo-500 transition">
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
