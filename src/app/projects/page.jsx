import Image from "next/image";

export default function Projects() {
  return (
    <div>
     <section id="projects" className="bg-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="bg-gray-100 rounded-xl shadow-sm overflow-hidden">
            <img
              src="/images/my-pro2.jpg"
              alt="Project One Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">Travelers Page</h3>
              <p className="text-gray-600">
                Travel page with forms, styled using Tailwind CSS
              </p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl shadow-sm overflow-hidden">
            <img
              src="/images/my-pro.jpg"
              alt="Project Two Image"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">Hotel Page</h3>
              <p className="text-gray-600">
                Responsive hotel site built with Tailwind and HTML.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
