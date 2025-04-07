import Image from "next/image";

export default function About() {
  return (
    <div>
     <section id="about" className="max-w-5xl mx-auto px-6 py-12 text-center">
      <div className="flex flex-col items-center">
        <img
          src="/images/image-su.png"
          alt="Profile Photo"
          className="rounded-full w-36 h-40 mb-4 shadow-md object-cover"
        />
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p className="text-gray-600 max-w-xl">
          I'm a passionate front-end developer with skills in HTML, CSS,
          JavaScript, and React. I love creating responsive, user-friendly web
          experiences that make a difference.
        </p>
      </div>
    </section>
    </div>
  );
}
