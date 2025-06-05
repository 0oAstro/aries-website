"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  IconCode, 
  IconBrain, 
  IconUsers, 
  IconTrophy,
  IconCalendarEvent,
  IconRocket,
  IconBulb
} from "@tabler/icons-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { LampContainer } from "@/components/ui/lamp";
import { buttonVariants } from '@/components/ui/button';
import { motion } from "motion/react";

const features = [
  {
    title: "AI Research & Development",
    description: "Cutting-edge research in machine learning, deep learning, and artificial intelligence applications.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 items-center justify-center">
      <IconBrain className="h-8 w-8 text-purple-400" />
    </div>,
    className: "md:col-span-1",
    icon: <IconBrain className="h-4 w-4" style={{ color: 'rgb(106,58,196)' }} />,
  },
  {
    title: "Technical Workshops & Innovation Challenges",
    description: "Hands-on workshops covering the latest AI tools, frameworks, and technologies. Regular hackathons and coding competitions to push the boundaries of AI innovation.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-600/25 to-purple-700/25 border border-purple-400/40 items-center justify-center">
      <IconCode className="h-8 w-8 text-purple-300" />
    </div>,
    className: "md:col-span-3",
    icon: <IconCode className="h-4 w-4" style={{ color: 'rgb(106,58,196)' }} />,
  },
  {
    title: "Community Building & Industry Connections",
    description: "Building a strong community of AI enthusiasts, researchers, and innovators. Guest lectures, industry visits, and networking opportunities with AI professionals.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-purple-600/25 to-purple-700/25 border border-purple-400/40 items-center justify-center">
      <IconUsers className="h-8 w-8 text-purple-300" />
    </div>,
    className: "md:col-span-3",
    icon: <IconUsers className="h-4 w-4" style={{ color: 'rgb(106,58,196)' }} />,
  },
  {
    title: "Regular Events",
    description: "Weekly meetups, tech talks, and collaborative project sessions.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 items-center justify-center">
      <IconCalendarEvent className="h-8 w-8 text-pink-400" />
    </div>,
    className: "md:col-span-1",
    icon: <IconCalendarEvent className="h-4 w-4" style={{ color: 'rgb(233,123,177)' }} />,
  },
];

export const FeaturesSection = () => {
  return (
    <div className="relative w-full bg-black py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full z-0">
        <ShootingStars 
          minSpeed={8}
          maxSpeed={25}
          minDelay={2000}
          maxDelay={6000}
          starColor="rgb(106,58,196)"
          trailColor="rgb(233,123,177)"
        />
        <StarsBackground starDensity={0.0001} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-6">
            Artificial Intelligence, Machine Learning and everything in between
          </h2>
          <p className="text-lg text-neutral-300 max-w-4xl mx-auto mb-12">
            ARIES is IIT Delhi's student-led community that brings together curious minds to learn, build, and explore intelligent systems.
          </p>
          
          <h3 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Not just another club
          </h3>
          <p className="text-lg text-neutral-300 max-w-4xl mx-auto">
            ARIES is a space where ideas turn into research, research turns into products, and people grow into innovators.
          </p>
        </div>

        {/* Lamp Effect with What We Do Section */}
        <div className="relative">
          <LampContainer 
            className="relative flex min-h-[30rem] flex-col items-center justify-center overflow-hidden bg-transparent w-full rounded-md z-0"
          >
            <motion.h3
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="mt-8 bg-gradient-to-br from-white to-purple-300 py-4 bg-clip-text text-center text-3xl md:text-4xl font-bold tracking-tight text-transparent"
            >
              What we do
            </motion.h3>
          </LampContainer>
        </div>

        {/* What We Do Section */}
        <div className="mb-16 -mt-32 relative z-20">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-4">
            {features.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={item.className}
                icon={item.icon}
              />
            ))}
          </div>
        </div>

        {/* Action Items Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Powerful Projects */}
          <div className="bg-gradient-to-br from-purple-900/25 to-purple-800/20 border border-purple-500/40 rounded-xl p-8 hover:border-purple-400 transition-all duration-300">
            <div className="flex items-center mb-6">
              <IconBulb className="h-8 w-8 mr-4" style={{ color: 'rgb(106,58,196)' }} />
              <h4 className="text-2xl font-bold text-white">Powerful Projects</h4>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              Code that does more than compile - our projects turn curiosity into prototypes, and ideas into impact. 
              From neural networks to robotics, we build solutions that matter.
            </p>
            <div>
              <a 
                href="/projects" 
                style={{ background: 'linear-gradient(to bottom, rgb(106,58,196), rgb(85,46,157))' }}
                className="inline-flex items-center px-6 py-3 rounded-md text-white font-medium hover:-translate-y-1 transition-all duration-300 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Exciting Events */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/15 border border-purple-500/30 rounded-xl p-8 hover:border-purple-400 transition-all duration-300">
            <div className="flex items-center mb-6">
              <IconCalendarEvent className="h-8 w-8 mr-4" style={{ color: 'rgb(233,123,177)' }} />
              <h4 className="text-2xl font-bold text-white">Exciting Events</h4>
            </div>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              From caffeine-fueled hackathons to talks that actually stick, our events are designed to challenge, 
              connect and leave a mark on your AI journey.
            </p>
            <div>
              <a 
                href="/events" 
                style={{ background: 'linear-gradient(to bottom, rgb(233,123,177), rgb(219,112,165))' }}
                className="inline-flex items-center px-6 py-3 rounded-md text-white font-medium hover:-translate-y-1 transition-all duration-300 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
              >
                View Events
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to join the AI revolution?
          </h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Whether you're a beginner or an expert, there's a place for you in our community. 
            Let's build the future of AI together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              style={{ background: 'linear-gradient(to bottom, rgb(106,58,196), rgb(85,46,157))' }}
              className="px-8 py-4 rounded-md text-white text-lg font-bold relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
            >
              Join ARIES
            </a>
            <a
              href="/events"
              className="px-8 py-4 rounded-md border text-white text-lg font-medium relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center hover:border-purple-400"
              style={{ borderColor: 'rgb(106,58,196)' }}
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}; 