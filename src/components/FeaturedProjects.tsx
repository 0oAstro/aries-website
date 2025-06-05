"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Badge } from "@/components/ui/badge";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

// Synced featured projects data from ProjectsSection
const featuredProjects = [
  {
    title: "Neural Style Transfer",
    description: "An advanced deep learning project that applies artistic styles to images using convolutional neural networks and transfer learning techniques. Built with PyTorch and optimized for real-time processing.",
    link: "#",
    github: "#",
    category: "Computer Vision",
    techStack: ["Python", "PyTorch", "OpenCV", "NumPy"],
    image: "https://placehold.co/600x400.png",
    team: ["Arjun Sharma", "Priya Gupta"]
  },
  {
    title: "Sentiment Analysis Bot",
    description: "Real-time sentiment analysis using NLP techniques to understand emotions in social media data and customer feedback. Includes web dashboard and API endpoints.",
    link: "#",
    github: "#",
    category: "Natural Language Processing",
    techStack: ["Python", "NLTL", "Flask", "MongoDB"],
    image: "https://placehold.co/600x400.png",
    team: ["Rohit Kumar", "Sneha Patel"]
  },
  {
    title: "Autonomous Campus Navigation",
    description: "AI-powered navigation system for IIT Delhi campus using computer vision, path planning algorithms, and real-time obstacle detection for autonomous vehicles.",
    link: "#",
    github: "#",
    category: "Robotics",
    techStack: ["Python", "ROS", "TensorFlow", "OpenCV"],
    image: "https://placehold.co/600x400.png",
    team: ["Vikram Singh", "Neha Joshi"]
  }
];

export const FeaturedProjects = () => {
  return (
    <div className="relative w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Discover the innovative AI projects built by our talented members at Aries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          {/* First Project - Large Card */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full min-h-[500px] lg:min-h-[300px] bg-gradient-to-br from-purple-600 to-purple-800"
          >
            <div className="max-w-xs">
              <Badge 
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} 
                className="text-white border-none mb-3"
              >
                {featuredProjects[0].category}
              </Badge>
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {featuredProjects[0].title}
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                {featuredProjects[0].description}
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {featuredProjects[0].techStack.slice(0, 3).map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="text-xs border-white/30 text-white hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex space-x-3">
                <a
                  href={featuredProjects[0].github}
                  className="flex items-center px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md transition-colors text-sm"
                >
                  <IconBrandGithub className="w-4 h-4 mr-2" />
                  Code
                </a>
                <a
                  href={featuredProjects[0].link}
                  className="flex items-center px-3 py-2 bg-white text-purple-600 hover:bg-gray-100 rounded-md transition-colors text-sm font-medium"
                >
                  <IconExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </div>
            </div>
          </WobbleCard>

          {/* Second Project - Medium Card */}
          <WobbleCard 
            containerClassName="col-span-1 min-h-[300px] bg-gradient-to-br from-pink-600 to-pink-800"
          >
            <div>
              <Badge 
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} 
                className="text-white border-none mb-3"
              >
                {featuredProjects[1].category}
              </Badge>
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {featuredProjects[1].title}
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                {featuredProjects[1].description}
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {featuredProjects[1].techStack.slice(0, 3).map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="text-xs border-white/30 text-white hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex space-x-3">
                <a
                  href={featuredProjects[1].github}
                  className="flex items-center px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md transition-colors text-sm"
                >
                  <IconBrandGithub className="w-4 h-4 mr-2" />
                  Code
                </a>
                <a
                  href={featuredProjects[1].link}
                  className="flex items-center px-3 py-2 bg-white text-pink-600 hover:bg-gray-100 rounded-md transition-colors text-sm font-medium"
                >
                  <IconExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </div>
            </div>
          </WobbleCard>

          {/* Third Project - Wide Card */}
          <WobbleCard 
            containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-gradient-to-br from-purple-700 to-purple-900"
          >
            <div className="max-w-sm">
              <Badge 
                style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} 
                className="text-white border-none mb-3"
              >
                {featuredProjects[2].category}
              </Badge>
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {featuredProjects[2].title}
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                {featuredProjects[2].description}
              </p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {featuredProjects[2].techStack.slice(0, 4).map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="text-xs border-white/30 text-white hover:bg-white/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex space-x-3">
                <a
                  href={featuredProjects[2].github}
                  className="flex items-center px-3 py-2 bg-white/20 hover:bg-white/30 text-white rounded-md transition-colors text-sm"
                >
                  <IconBrandGithub className="w-4 h-4 mr-2" />
                  Code
                </a>
                <a
                  href={featuredProjects[2].link}
                  className="flex items-center px-3 py-2 bg-white text-purple-600 hover:bg-gray-100 rounded-md transition-colors text-sm font-medium"
                >
                  <IconExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </div>
            </div>
            {/* Decorative element for the wide card */}
            <div className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 opacity-30">
              <div className="w-60 h-40 bg-gradient-to-br from-white/10 to-white/5 rounded-lg"></div>
            </div>
          </WobbleCard>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            style={{ background: 'linear-gradient(to bottom, rgb(106,58,196), rgb(85,46,157))' }}
            className="px-8 py-4 rounded-md text-white text-lg font-bold relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
}; 