"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Expansion & Innovation</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-blue-400 mb-2">Major Achievements</h4>
            <ul className="text-neutral-300 space-y-2">
              <li>• Launched 15+ successful AI projects</li>
              <li>• Organized the largest AI hackathon at IIT Delhi</li>
              <li>• Partnership with industry leaders</li>
              <li>• 200% growth in membership</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-400 mb-2">Key Events</h4>
            <ul className="text-neutral-300 space-y-2">
              <li>• AI Ethics Symposium</li>
              <li>• Computer Vision Workshop Series</li>
              <li>• Research Paper Publications</li>
              <li>• Alumni Network Expansion</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Growing Strong</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-400 mb-2">Milestones</h4>
            <ul className="text-neutral-300 space-y-2">
              <li>• First inter-college AI competition</li>
              <li>• Collaboration with faculty research</li>
              <li>• Student-led research projects</li>
              <li>• Tech talk series launch</li>
            </ul>
          </div>
          <div className="bg-neutral-800 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-400 mb-2">Impact Numbers</h4>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-400">50+</div>
                <div className="text-xs text-neutral-400">Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">12</div>
                <div className="text-xs text-neutral-400">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2022",
    content: (
      <div>
        <h3 className="text-xl font-bold text-white mb-4">Building Foundations</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-cyan-400 mb-2">Key Initiatives</h4>
            <ul className="text-neutral-300 space-y-2">
              <li>• Weekly ML study groups</li>
              <li>• First student projects launched</li>
              <li>• Guest lecture series</li>
              <li>• Core team establishment</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-400 mb-2">Community Building</h4>
            <ul className="text-neutral-300 space-y-2">
              <li>• Discord community created</li>
              <li>• Resource sharing platform</li>
              <li>• Mentorship programs</li>
              <li>• Cross-departmental outreach</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2021",
    content: (
      <div>
        <h3 className="text-xl font-bold text-white mb-4">The Beginning</h3>
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-neutral-700">
          <h4 className="font-semibold text-blue-400 mb-4">Foundation Story</h4>
          <p className="text-neutral-300 mb-4">
            Aries AI Society was founded by a group of passionate students who recognized the growing importance 
            of artificial intelligence and machine learning in shaping the future.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-purple-400 mb-2">Original Vision</h5>
              <ul className="text-neutral-300 space-y-1 text-sm">
                <li>• Create an AI learning community</li>
                <li>• Bridge theory and practical applications</li>
                <li>• Foster innovation and research</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-green-400 mb-2">First Steps</h5>
              <ul className="text-neutral-300 space-y-1 text-sm">
                <li>• 15 founding members</li>
                <li>• First AI workshop</li>
                <li>• Official society registration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const achievements = [
  {
    quote: "Winner of Best AI Innovation Award at Inter-IIT Tech Meet 2024",
    name: "Inter-IIT Tech Meet",
    title: "National Competition",
  },
  {
    quote: "Recognition for Outstanding Student Society by IIT Delhi Administration",
    name: "IIT Delhi",
    title: "Excellence Award",
  },
  {
    quote: "Featured in top 10 student AI initiatives in India by TechCrunch",
    name: "TechCrunch India",
    title: "Media Recognition",
  },
  {
    quote: "Partnership with leading AI companies for student internships",
    name: "Industry Partners",
    title: "Corporate Recognition",
  },
  {
    quote: "Published 25+ research papers with student contributions",
    name: "Academic Community",
    title: "Research Excellence",
  },
];

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

      {/* Achievements Carousel */}
      <div className="py-20 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Recognition & Achievements
          </h2>
          <InfiniteMovingCards
            items={achievements}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="py-20 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">200+</div>
              <div className="text-neutral-300 font-medium">Alumni Network</div>
              <div className="text-sm text-neutral-500 mt-1">Across top tech companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-4">50+</div>
              <div className="text-neutral-300 font-medium">Research Papers</div>
              <div className="text-sm text-neutral-500 mt-1">Published & presented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">15+</div>
              <div className="text-neutral-300 font-medium">Industry Partners</div>
              <div className="text-sm text-neutral-500 mt-1">Leading AI companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">5000+</div>
              <div className="text-neutral-300 font-medium">Lives Impacted</div>
              <div className="text-sm text-neutral-500 mt-1">Through our initiatives</div>
            </div>
          </div>
        </div>
      </div>

      {/* Alumni Success Stories */}
      <div className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Alumni Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 border border-neutral-700">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">Rajesh Kumar</h3>
                <p className="text-blue-400">ML Engineer at Google</p>
                <p className="text-sm text-neutral-400">Class of 2023</p>
              </div>
              <p className="text-neutral-300">
                "Aries gave me the foundation and confidence to pursue AI research. The collaborative environment 
                and hands-on projects prepared me for my role at Google."
              </p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 border border-neutral-700">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">Priya Sharma</h3>
                <p className="text-green-400">AI Startup Founder</p>
                <p className="text-sm text-neutral-400">Class of 2022</p>
              </div>
              <p className="text-neutral-300">
                "The entrepreneurial spirit and innovation mindset I developed at Aries helped me start my own 
                AI company focused on healthcare solutions."
              </p>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 border border-neutral-700">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white">Ankit Verma</h3>
                <p className="text-purple-400">Research Scientist at OpenAI</p>
                <p className="text-sm text-neutral-400">Class of 2021</p>
              </div>
              <p className="text-neutral-300">
                "Aries taught me to think beyond boundaries. The research culture and mentorship I received 
                paved my way to working on cutting-edge AI at OpenAI."
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