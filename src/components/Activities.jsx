import { useState } from 'react';

const activities = [
  {
    title: "Alpha Kappa Psi - Business Fraternity",
    role: "Brother, Professional Committee Member",
    date: "May 2025 – Present",
    location: "Virginia Tech, Blacksburg, VA",
    bullets: [
      "• Organized networking events and workshops with industry professionals for 50+ students.",
      "• Collaborated on case competitions and resume review sessions with upperclassmen mentors.",
      "• Promoted a culture of professional development and ethical business leadership."
    ]
  },
  {
    title: "Mock Trial Team",
    role: "Attorney and Witness",
    date: "Sep 2023 – Present",
    location: "Virginia Tech, Blacksburg, VA",
    bullets: [
      "• Competed in regional tournaments, developing persuasive arguments and courtroom skills.",
      "• Practiced case analysis, objection strategy, and public speaking under timed conditions.",
      "• Collaborated with team to simulate real trial proceedings and refine legal reasoning."
    ]
  },
  {
    title: "DJ & Music Production",
    role: "Performer / Hobbyist",
    date: "2019 – Present",
    location: "Various events & online platforms",
    bullets: [
      "• Performed at private events and campus parties, blending EDM, hip-hop, and house genres.",
      "• Produced mashups and original mixes using Ableton Live and Rekordbox.",
      "• Built a loyal following through engaging sets and online content across multiple platforms."
    ]
  }
];

export default function Activities() {
  return (
    <section id="activities" className="bg-[#1f1f1f] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-7 gap-20 items-center">
        {/* Code-style left section with function declaration */}
        <div className="col-span-2 hidden md:flex flex-col font-mono text-xl md:text-2xl lg:text-3xl space-y-4 justify-center">
          <div>
            <span className="text-white">{"};"}</span>
            <span className="ml-2 text-gray-500 text-sm">// end experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">function</span>
            <span className="text-white">activities</span>
            <span className="text-white">()</span>
            <span className="text-white">{"{"}</span>
          </div>
          <div className="text-white">return [</div>
        </div>

        {/* Right content */}
        <div className="col-span-5 pl-36">
          <h2 className="uppercase text-sm tracking-widest text-gray-400 mb-8 relative w-max cursor-pointer font-medium transition hover:text-white hover:underline underline-offset-4">
            Activities
          </h2>

          <div className="space-y-16">
            {activities.map((activity, idx) => (
              <div key={idx} className="grid md:grid-cols-6 gap-8">
                <div className="md:col-span-2 text-gray-400 text-sm">
                  <p className="font-semibold text-white text-base md:text-lg">{activity.title}</p>
                  <p>{activity.role}</p>
                  <p>{activity.date}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.location}</p>
                </div>
                <div className="md:col-span-4">
                  <ul className="list-none space-y-2 text-sm text-gray-100 pl-4">
                    {activity.bullets.map((point, i) => (
                      <li key={i} className="relative pl-4 before:content-['\2022'] before:absolute before:left-0 before:text-white">
                        {point.replace(/^•\s*/, '')}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Closing brackets to complete the function return */}
          <div className="font-mono text-white mt-10">
            <div>];</div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
