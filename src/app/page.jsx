import Link from "next/link";
import styles from "./home.module.css";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Hi, I'm Susana!</h1>
      <p className="text-lg text-gray-600 mb-6">
        A passionate Front-End Developer focused on creating responsive and
        user-friendly web experiences.
      </p>

      <div className="flex gap-6">
        <Link
          href="/about"
          className="bg-indigo-600 text-white py-2 px-6 rounded-full text-lg hover:bg-indigo-700 transition"
        >
          About Me
        </Link>

        <Link
          href="/projects"
          className="bg-gray-800 text-white py-2 px-6 rounded-full text-lg hover:bg-gray-900 transition"
        >
          View My Projects
        </Link>
      </div>
      
      <div className={styles.shape} />

      <div className="mt-12 text-center text-gray-500">
        <p>Skills: HTML, CSS, JavaScript, React, Tailwind CSS</p>
      </div>
    </section>
  );
}
