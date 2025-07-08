import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const experiences = [
  {
    title: "S.M. Travel Company",
    role: "Full Stack Developer / Systems Engineer",
    date: "Apr – Jun 2025",
    location: "Ashburn, Virginia",
    bullets: [
      "Developed and deployed a responsive full-stack web application using React, Tailwind, Node.js, and Flask.",
      "Built backend services with Flask to manage 20+ travel consultation requests efficiently.",
      "Integrated Stripe + Google Sheets using serverless functions to log 60+ transactions."
    ]
  },
  {
    title: "Phoenix Hackathon",
    role: "Software Developer",
    date: "Aug – Feb 2024",
    location: "Ashburn, Virginia",
    bullets: [
      "Built a registration system using MongoDB, Express, React, and Node.js for 140+ participants.",
      "Added validation and CRUD logic for consistent data management.",
      "Led a workshop for 20+ students covering data structures and regression models."
    ]
  },
  {
    title: "AI for Physical Therapy",
    role: "Research Lead / Software Dev",
    date: "Feb – Aug 2023",
    location: "Herndon, Virginia",
    bullets: [
      "Published a research study in IJSSER applying AI to physical therapy for student-athletes.",
      "Created a motion-tracking system using Python, OpenCV, and MediaPipe to analyze joint movement.",
      "Contributed to 9% measured improvement in ankle flexibility in real trials."
    ]
  }
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="experience" className="bg-[#1f1f1f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-7 gap-6 items-start">
        {/* Left code-style block, centered */}
        <div className="col-span-2 hidden md:flex flex-col font-mono text-xl md:text-2xl lg:text-3xl space-y-4 self-center">
          <div className="flex items-baseline space-x-2">
            <span className="text-white">{"};"}</span>
            <span className="text-sm text-gray-500">// end notableProjects</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">const</span>
            <span className="text-white">experience</span>
            <span className="text-white">=</span>
            <span className="text-white">{"{"}</span>
          </div>
        </div>

        {/* Right content */}
        <div className="col-span-5">
          <h2 className="text-sm tracking-widest uppercase font-medium text-gray-400 mb-8 relative w-max cursor-pointer transition hover:text-white hover:underline underline-offset-4">
            Experience & Leadership
          </h2>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="border border-gray-700 rounded-lg bg-[#2a2a2a] p-6 shadow-md hover:bg-[#333] transition text-gray-100"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggle(idx)}
                >
                  <div>
                    <h3 className="text-lg font-bold">{exp.title}</h3>
                    <p className="text-sm text-gray-400">
                      {exp.role} • {exp.date}
                    </p>
                    <p className="text-xs text-gray-500">{exp.location}</p>
                  </div>
                  {openIndex === idx ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>

                <div
                  className={`mt-4 transition-all duration-300 overflow-hidden ${
                    openIndex === idx
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-gray-100">
                    {exp.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
