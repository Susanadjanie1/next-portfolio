import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
     
        <h2 className="text-3xl font-bold mb-4 text-gray-800">My Projects</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on recently — combining creativity, functionality, and responsive design using tools like React and Tailwind CSS.
        </p>

        
        <div className="grid gap-10 md:grid-cols-2">
      
          <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <Image
              src="/images/my-pro2.jpg"
              alt="Travelers Page"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Travelers Page</h3>
              <p className="text-gray-600 mb-4">
                A responsive page with forms for booking and travel info. Built with Tailwind CSS and semantic HTML.
              </p>
        
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline text-sm"
                >
                  View Live
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline text-sm"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>


          <div className="bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition">
            <Image
              src="/images/my-pro.jpg"
              alt="Hotel Page"
              width={600}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Hotel Page</h3>
              <p className="text-gray-600 mb-4">
                A sleek hotel website with custom styling and mobile responsiveness using HTML and Tailwind CSS.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline text-sm"
                >
                  View Live
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline text-sm"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
