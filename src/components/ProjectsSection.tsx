"use client";

import React, { useState } from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { IconSearch, IconBrandGithub, IconExternalLink, IconCode } from "@tabler/icons-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const projects = [
  {
    title: "Real life TARS Robot",
    description: "A Replica of the TARS robot from Interstellar, produced by ARIES team in a showcase visit to Japanese Students.",
    link: "#",
    github: "#",
    category: "Natural Language Processing",
    techStack: ["Python", "NLTK", "Flask", "MongoDB"],
    featured: true,
    image: '/projects/tars.png',
    team: []
  },
  {
    title: "ML project for military",
    description: "empowering our guarding angels with latest technology , the youth of this country contributes to its developement , here at ARIES.",
    link: "#",
    github: "#",
    category: "Healthcare",
    techStack: ["Python", "Keras", "Medical Imaging", "CNN"],
    featured: false,
    image: '/projects/military.png',
    team: []
  },
  {
    title: "Smart Energy Management",
    description: "IoT-based energy optimization system using machine learning to predict and reduce energy consumption in smart buildings.",
    link: "#",
    github: "#",
    category: "IoT",
    techStack: ["Python", "Scikit-learn", "IoT", "Raspberry Pi"],
    featured: true,
    image: '/projects/energy.png',
    team: []
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent conversational AI built with transformer models, capable of understanding context and providing helpful responses across multiple domains.",
    link: "#",
    github: "#",
    category: "Natural Language Processing",
    techStack: ["Python", "Transformers", "FastAPI", "React"],
    featured: false,
    image: '/projects/chatbot.png',
    team: []
  },
  {
    title: "Stock Price Predictor",
    description: "Machine learning model for predicting stock prices using LSTM networks and technical analysis indicators with real-time data processing.",
    link: "#",
    github: "#",
    category: "Finance",
    techStack: ["Python", "LSTM", "Pandas", "Yahoo Finance API"],
    featured: true,
    image: '/projects/stocks.png',
    team: []
  },
  {
    title: "Tresswap",
    description: "GAN based approach to transform hairstyles.",
    link: "#",
    github: "#",
    category: "Computer Vision",
    techStack: ["Python", "OpenCV", "FaceNet", "SQLite"],
    featured: false,
    image: '/projects/tresswap.png',
    team: []
  }
];

const categories = ["All", "Computer Vision", "Natural Language Processing", "Robotics", "Healthcare", "IoT", "Finance"];

const ProjectCardWithHover = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div 
      className="relative group block p-2 h-full w-full"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {hoveredIndex === index && (
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 block rounded-3xl animate-pulse" />
      )}
      
      <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-neutral-700 p-6 hover:border-purple-500 transition-all duration-300 hover:scale-105 relative z-20">
        <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-neutral-800">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex justify-between items-start mb-3">
          <Badge variant="secondary" style={{ backgroundColor: 'rgb(106,58,196)' }} className="text-white border-none">
            {project.category}
          </Badge>
          {project.featured && (
            <Badge style={{ backgroundColor: 'rgb(233,123,177)' }} className="text-white border-none">Featured</Badge>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-neutral-300 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="mb-4">
          <p className="text-sm text-neutral-400 mb-2">Tech Stack:</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <Badge 
                key={idx} 
                variant="outline" 
                className="text-xs border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-neutral-400 mb-1">Team:</p>
          <p className="text-sm text-neutral-300">{project.team.join(", ")}</p>
        </div>
        
        <div className="flex space-x-3">
          <a
            href={project.github}
            className="flex-1 flex items-center justify-center px-3 py-2 bg-neutral-700 hover:bg-neutral-600 text-white rounded-md transition-colors text-sm"
          >
            <IconBrandGithub className="w-4 h-4 mr-2" />
            Code
          </a>
          <a
            href={project.link}
            style={{ backgroundColor: 'rgb(106,58,196)' }}
            className="flex-1 flex items-center justify-center px-3 py-2 hover:opacity-80 text-white rounded-md transition-all text-sm"
          >
            <IconExternalLink className="w-4 h-4 mr-2" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="relative w-full bg-black min-h-screen pt-24">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stars Background - Only on main content */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <StarsBackground 
            starDensity={0.0005}
            allStarsTwinkle={true}
            twinkleProbability={0.8}
            minTwinkleSpeed={0.5}
            maxTwinkleSpeed={1.5}
            className="absolute inset-0"
          />
          <ShootingStars 
            minSpeed={15}
            maxSpeed={35}
            minDelay={800}
            maxDelay={3000}
            starColor="#9E00FF"
            trailColor="#2EB9DF"
            starWidth={12}
            starHeight={2}
            className="absolute inset-0"
          />
        </div>
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            AI Projects Showcase
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Explore the innovative AI projects built by our talented members. From computer vision to NLP, discover the cutting-edge solutions we're developing.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <div style={{ backgroundColor: 'rgb(106,58,196)' }} className="rounded-xl">
              <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-transparent min-h-[500px] lg:min-h-[300px]"
              >
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    {featuredProjects[0]?.title}
                  </h2>
                  <p className="mt-4 text-left text-base/6 text-neutral-200">
                    {featuredProjects[0]?.description}
                  </p>
                </div>
              </WobbleCard>
            </div>

            <div style={{ backgroundColor: 'rgb(106,58,196)' }} className="rounded-xl">
              <WobbleCard 
                containerClassName="col-span-1 min-h-[300px] bg-transparent"
              >
                <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  {featuredProjects[1]?.title}
                </h2>
                <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                  {featuredProjects[1]?.description}
                </p>
              </WobbleCard>
            </div>

            <div style={{ backgroundColor: 'rgb(106,58,196)' }} className="rounded-xl">
              <WobbleCard 
                containerClassName="col-span-1 lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] bg-transparent"
              >
                <div className="max-w-sm">
                  <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    {featuredProjects[2]?.title}
                  </h2>
                  <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                    {featuredProjects[2]?.description}
                  </p>
                </div>
              </WobbleCard>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <Input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-400"
                />
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'text-white border-none'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
                style={selectedCategory === category ? { backgroundColor: 'rgb(106,58,196)' } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              All Projects ({filteredProjects.length})
            </h2>
            <div className="flex items-center text-neutral-400">
              <IconCode className="w-5 h-5 mr-2" />
              <span>Open Source</span>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, idx) => (
                <ProjectCardWithHover key={idx} project={project} index={idx} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-neutral-400 text-lg">No projects found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Project Statistics */}
        <div className="py-16 border-t border-neutral-800">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Project Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
              <div className="text-sm text-neutral-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">8</div>
              <div className="text-sm text-neutral-400">Categories Covered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-sm text-neutral-400">Technologies Used</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
              <div className="text-sm text-neutral-400">Open Source</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Have a Project Idea?
          </h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Join our community and collaborate on exciting AI projects. Whether you're a beginner or expert, 
            there's always room for innovation and learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://chat.whatsapp.com/D98xdCtosjr2d8wchQJSvL"
              style={{ background: 'linear-gradient(to bottom, rgb(106,58,196), rgb(85,46,157))' }}
              className="px-8 py-4 rounded-md text-white text-lg font-bold relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
            >
              Get Involved
            </a>
            <a
              href="/events"
              className="px-8 py-4 rounded-md border text-white text-lg font-medium relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center hover:border-pink-400"
              style={{ borderColor: 'rgb(233,123,177)' }}
            >
              Join Workshop
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}; 