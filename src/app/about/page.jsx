import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-16 text-center">
      <div className="flex flex-col items-center">
       
        <Image
          src="/images/image-su.png"
          alt="Profile Photo"
          width={160}
          height={160}
          className="rounded-full mb-4 shadow-md object-cover"
        />

       
        <h2 className="text-3xl font-bold mb-2 text-gray-800">About Me</h2>

       
        <p className="text-gray-600 max-w-2xl leading-relaxed mb-6">
          Hi! I'm a passionate <span className="font-semibold text-gray-800">Front-End Developer</span> who loves crafting clean and responsive web interfaces. I focus on creating intuitive user experiences using technologies like <span className="font-medium text-indigo-600">HTML, CSS, Tailwind CSS, JavaScript</span>, and <span className="font-medium text-indigo-600">React</span>. My goal is to build accessible and delightful products that solve real problems.
        </p>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700 mb-10">
          <span className="bg-gray-100 rounded-full px-4 py-2">HTML & CSS</span>
          <span className="bg-gray-100 rounded-full px-4 py-2">JavaScript</span>
          <span className="bg-gray-100 rounded-full px-4 py-2">React</span>
          <span className="bg-gray-100 rounded-full px-4 py-2">Tailwind CSS</span>
          <span className="bg-gray-100 rounded-full px-4 py-2">Git & GitHub</span>
          <span className="bg-gray-100 rounded-full px-4 py-2">Responsive Design</span>
        </div>

       
        <p className="text-gray-500 italic max-w-lg">
          When I’m not coding, you’ll find me exploring design inspirations, journaling my ideas, or cheering on women in tech.
        </p>
      </div>
    </section>
  );
}
