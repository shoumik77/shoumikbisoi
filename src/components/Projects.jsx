import { useState } from 'react';

const projects = [
  {
    title: "AI Sample Discovery App",
    description:
      "Built with GPT-4, Flask, and Spotify API to translate producer prompts into searchable music queries.",
    category: "Machine Learning",
    stack: "Python, React",
    link: "https://github.com/shoumik77",
    private: false,
  },
  {
    title: "Heart Disease Predictor",
    description:
      "Logistic regression model with PyQt5 UI for live risk prediction using real-world health data.",
    category: "Python",
    stack: "Python, PyQt5, Sci-kit Learn",
    link: "https://github.com/shoumik77",
    private: false,
  },
  {
    title: "C++ Qt Web Browser",
    description:
      "Multi-tabbed lightweight C++ browser with Qt 6, JavaScript execution, and REST API support.",
    category: "C++",
    stack: "C++, Qt 6",
    link: "https://github.com/shoumik77",
    private: false,
  },
  {
    title: "SM Travel Website",
    description:
      "Full-stack travel agency web app using React, Tailwind CSS, Flask, Node.js, and Stripe integration.",
    category: "JavaScript / React",
    stack: "React, Flask, Tailwind, Node.js",
    private: true,
  },
  {
    title: "Phoenix Hackathon",
    description:
      "MongoDB/Express/React app for managing 140+ registrations with full CRUD and data validation.",
    category: "Full Stack",
    stack: "MERN Stack",
    private: true,
  },
  {
    title: "AI in Physical Therapy",
    description:
      "Python motion-tracking system using MediaPipe to optimize ankle flexibility training via joint angle analysis.",
    category: "Machine Learning",
    stack: "Python, OpenCV, MediaPipe",
    private: true,
  },
];

const categories = [
  "All",
  "Machine Learning",
  "Python",
  "C++",
  "JavaScript / React",
  "Full Stack",
];

export default function Projects() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? projects
      : projects.filter((p) => p.category === selected);

  return (
    <section id="projects" className="bg-[#1f1f1f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-7 gap-6">
        {/* Left Side: const notableProjects = { */}
        <div className="col-span-2 hidden md:flex justify-end items-start md:items-center pt-2">
  <div className="flex items-center font-mono text-white text-xl md:text-2xl lg:text-3xl">
    <span className="text-blue-400">const</span>
    <span className="ml-2 font-bold">notableProjects</span>
    <span className="ml-2">=</span>
    <span className="ml-2 text-white">{'{'}</span>
  </div>
</div>

        {/* Right Side: Categories + Cards */}
        <div className="col-span-7 md:col-span-5">
          {/* Category Tabs */}
          <div className="w-full flex justify-center mb-10">
            <div className="flex flex-wrap justify-center gap-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={`uppercase text-sm tracking-widest transition font-medium cursor-pointer ${
                    selected === cat
                      ? "text-white underline underline-offset-4"
                      : "text-gray-400 hover:text-white hover:underline"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((proj, idx) => (
              <div
                key={idx}
                className="group border border-gray-700 rounded-lg p-6 bg-[#2a2a2a] hover:bg-[#333] transition text-gray-100"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400">
                    {proj.title}
                  </h3>
                  {proj.private && (
                    <span className="ml-2 text-xs text-red-500 font-semibold uppercase tracking-wider">
                      PRIVATE REPO
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-100">{proj.description}</p>
                <div className="flex justify-between mt-4 text-xs text-gray-400">
                  <span className="uppercase">{proj.category}</span>
                  <span>{proj.stack}</span>
                </div>
                {!proj.private && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-sm text-blue-400 underline"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
