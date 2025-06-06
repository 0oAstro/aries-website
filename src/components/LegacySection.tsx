"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const achievements = [
  {
    title: "The Kickoff",
    year: "2023",
    points: ["Bootstrapped IIT Delhi's first dedicated AI-ML society", "Started small, built from scratch"]
  },
  {
    title: "Expansion Mode", 
    year: "2024",
    points: ["Hosted packed events, hackathons, and bootcamps", "Collaborated with tech companies and student communities"]
  },
  {
    title: "Vertical Launch and infra upgrade",
    year: "2025", 
    points: ["Split into two verticals — Canvas for research, Brain for events", "Allows us to deeper without overlap", "Fully revamped our website", "Turned scattered docs into a central hub for projects, content, and resources"]
  },
  {
    title: "Ongoing Journey",
    year: "Present",
    points: ["Still student-run, still curiosity-led", "Building smarter, scaling wider, keeping it real"]
  }
].reverse();

const timelineData = achievements.map((a) => {
  return {
    title: a.year,
    content: (
      <div key={a.year}>
        <h3 className="text-xl font-bold text-white mb-4">{a.title}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-400 mb-2">Milestones</h4>
            <ul className="text-neutral-300 space-y-2">
              {a.points.map((p) => <li key={p}>• {p}</li>)}
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

// const timelineData = [
//   {
//     title: "Present",
//     content: (
//       <div>
//         <h3 className="text-xl font-bold text-white mb-4">We're here to stay</h3>
//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="font-semibold text-purple-400 mb-2">Key Events</h4>
//             <span>Still student-run, still curiosity-led — building smarter, scaling wider, keeping it real</span>
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "2025",
//     content: (
//       <div>
//         <h3 className="text-xl font-bold text-white mb-4">Growing Strong</h3>
//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="font-semibold text-green-400 mb-2">Milestones</h4>
//             <ul className="text-neutral-300 space-y-2">
//               <li>• First inter-college AI competition</li>
//               <li>• Collaboration with faculty research</li>
//               <li>• Student-led research projects</li>
//               <li>• Tech talk series launch</li>
//             </ul>
//           </div>
//           <div className="bg-neutral-800 rounded-lg p-4">
//             <h4 className="font-semibold text-yellow-400 mb-2">Impact Numbers</h4>
//             <div className="grid grid-cols-2 gap-4 text-center">
//               <div>
//                 <div className="text-2xl font-bold text-blue-400">50+</div>
//                 <div className="text-xs text-neutral-400">Members</div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-green-400">12</div>
//                 <div className="text-xs text-neutral-400">Projects</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "2024",
//     content: (
//       <div>
//         <h3 className="text-xl font-bold text-white mb-4">Growing Strong</h3>
//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <h4 className="font-semibold text-green-400 mb-2">Milestones</h4>
//             <ul className="text-neutral-300 space-y-2">
//               <li>• First inter-college AI competition</li>
//               <li>• Collaboration with faculty research</li>
//               <li>• Student-led research projects</li>
//               <li>• Tech talk series launch</li>
//             </ul>
//           </div>
//           <div className="bg-neutral-800 rounded-lg p-4">
//             <h4 className="font-semibold text-yellow-400 mb-2">Impact Numbers</h4>
//             <div className="grid grid-cols-2 gap-4 text-center">
//               <div>
//                 <div className="text-2xl font-bold text-blue-400">50+</div>
//                 <div className="text-xs text-neutral-400">Members</div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-green-400">12</div>
//                 <div className="text-xs text-neutral-400">Projects</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "2023",
//     content: (
//       <div>
//         <h3 className="text-xl font-bold text-white mb-4">The Beginning</h3>
//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <ul className="text-neutral-300 space-y-2">
//               <li>• Bootstrapped IIT Delhi's first dedicated AI-ML society</li>
//               <li>• Collaboration with faculty research</li>
//               <li>• Student-led research projects</li>
//               <li>• Tech talk series launch</li>
//             </ul>
//           </div>
//           <div className="bg-neutral-800 rounded-lg p-4">
//             <h4 className="font-semibold text-yellow-400 mb-2">Impact Numbers</h4>
//             <div className="grid grid-cols-2 gap-4 text-center">
//               <div>
//                 <div className="text-2xl font-bold text-blue-400">50+</div>
//                 <div className="text-xs text-neutral-400">Members</div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-green-400">12</div>
//                 <div className="text-xs text-neutral-400">Projects</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     ),
//   },
// ];

export const LegacySection = () => {
  return (
    <div className="relative w-full bg-black min-h-screen">
      {/* Header */}
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Our Legacy
          </h1>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            From humble beginnings to becoming IIT Delhi's premier AI society, our journey has been marked by 
            innovation, dedication, and the relentless pursuit of excellence in artificial intelligence.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <Timeline data={timelineData} />

      {/* Impact Statistics */}
      <div className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-4">5</div>
              <div className="text-neutral-300 font-medium">Research Papers</div>
              <div className="text-sm text-neutral-500 mt-1">Published & presented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">15+</div>
              <div className="text-neutral-300 font-medium">Industry Partners</div>
              <div className="text-sm text-neutral-500 mt-1">Leading AI companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">3000+</div>
              <div className="text-neutral-300 font-medium">Lives Impacted</div>
              <div className="text-sm text-neutral-500 mt-1">Through our initiatives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Past OCs */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Past Trailblazers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 border border-neutral-700">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">Vaibhav Seth</h3>
                <p className="text-sm text-neutral-400">Batch of 2025</p>
              </div>
              <p className="text-neutral-300">
                A compassionate core and a calming presence. His grace under pressure and unwavering support shaped the
                very heartbeat of ARIES. Thank you for leading with kindness and quiet strength.
              </p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 border border-neutral-700">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">Rudrakshi Singhal</h3>
                <p className="text-sm text-neutral-400">Batch of 2025</p>
              </div>
              <p className="text-neutral-300">
                Smart, driven and a true visionary. Her incredible work ethic and sharp mind inspired us all
                to push boundaries and dream bigger. Her legacy will echo in every project we take on.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Vision */}
      <div className="py-20 bg-gradient-to-b from-black to-blue-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Looking Ahead</h2>
          <p className="text-lg text-neutral-300 mb-8">
            As we continue our journey, we remain committed to pushing the boundaries of AI research, 
            fostering innovation, and building the next generation of AI leaders who will shape the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/events"
              className="px-8 py-4 rounded-md bg-gradient-to-b from-blue-500 to-blue-700 text-white text-lg font-bold relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
            >
              Join Our Journey
            </a>
            <a
              href="/team"
              className="px-8 py-4 rounded-md border border-neutral-600 text-white text-lg font-medium relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center hover:border-neutral-400"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}; 