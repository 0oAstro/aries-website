"use client";

import React, { useState } from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { IconSearch, IconBrandGithub, IconExternalLink, IconCode } from "@tabler/icons-react";

const projects = [
  {
    title: "Neural Style Transfer",
    description: "An advanced deep learning project that applies artistic styles to images using convolutional neural networks and transfer learning techniques. Built with PyTorch and optimized for real-time processing.",
    link: "#",
    github: "#",
    category: "Computer Vision",
    techStack: ["Python", "PyTorch", "OpenCV", "NumPy"],
    featured: true,
    image: "https://placehold.co/600x400.png",
    team: ["Arjun Sharma", "Priya Gupta"]
  },
  {
    title: "Sentiment Analysis Bot",
    description: "Real-time sentiment analysis using NLP techniques to understand emotions in social media data and customer feedback. Includes web dashboard and API endpoints.",
    link: "#",
    github: "#",
    category: "Natural Language Processing",
    techStack: ["Python", "NLTK", "Flask", "MongoDB"],
    featured: true,
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
    featured: true,
    image: "https://placehold.co/600x400.png",
    team: ["Vikram Singh", "Neha Joshi"]
  },
  {
    title: "Medical Diagnosis AI",
    description: "Computer vision model for early disease detection from medical imaging data using deep convolutional networks and attention mechanisms.",
    link: "#",
    github: "#",
    category: "Healthcare",
    techStack: ["Python", "Keras", "Medical Imaging", "CNN"],
    featured: false,
    image: "https://placehold.co/600x400.png",
    team: ["Amit Agarwal", "Pooja Sharma"]
  },
  {
    title: "Smart Energy Management",
    description: "IoT-based energy optimization system using machine learning to predict and reduce energy consumption in smart buildings.",
    link: "#",
    github: "#",
    category: "IoT",
    techStack: ["Python", "Scikit-learn", "IoT", "Raspberry Pi"],
    featured: false,
    image: "https://placehold.co/600x400.png",
    team: ["Rahul Mishra", "Kavya Reddy"]
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent conversational AI built with transformer models, capable of understanding context and providing helpful responses across multiple domains.",
    link: "#",
    github: "#",
    category: "Natural Language Processing",
    techStack: ["Python", "Transformers", "FastAPI", "React"],
    featured: false,
    image: "https://placehold.co/400x300.png",
    team: ["Siddharth Gupta", "Ritu Saxena"]
  },
  {
    title: "Stock Price Predictor",
    description: "Machine learning model for predicting stock prices using LSTM networks and technical analysis indicators with real-time data processing.",
    link: "#",
    github: "#",
    category: "Finance",
    techStack: ["Python", "LSTM", "Pandas", "Yahoo Finance API"],
    featured: false,
    image: "https://placehold.co/400x300.png",
    team: ["Harshit Kumar", "Anjali Mehta"]
  },
  {
    title: "Face Recognition System",
    description: "Real-time face recognition and attendance system using deep learning and computer vision for automated attendance tracking.",
    link: "#",
    github: "#",
    category: "Computer Vision",
    techStack: ["Python", "OpenCV", "FaceNet", "SQLite"],
    featured: false,
    image: "https://placehold.co/400x300.png",
    team: ["Nikhil Jain", "Shweta Singh"]
  }
];

const categories = ["All", "Computer Vision", "Natural Language Processing", "Robotics", "Healthcare", "IoT", "Finance"];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-neutral-700 p-6 hover:border-neutral-600 transition-all duration-300 hover:scale-105">
    <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-neutral-800">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover"
      />
    </div>
    
    <div className="flex justify-between items-start mb-3">
      <Badge variant="secondary" className="bg-blue-600">
        {project.category}
      </Badge>
      {project.featured && (
        <Badge className="bg-yellow-600">Featured</Badge>
      )}
    </div>
    
    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
    <p className="text-neutral-300 mb-4 line-clamp-3">{project.description}</p>
    
    <div className="mb-4">
      <p className="text-sm text-neutral-400 mb-2">Tech Stack:</p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech, idx) => (
          <Badge key={idx} variant="outline" className="text-xs">
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
        className="flex-1 flex items-center justify-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors text-sm"
      >
        <IconExternalLink className="w-4 h-4 mr-2" />
        Demo
      </a>
    </div>
  </div>
);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
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

            <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-900">
              <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {featuredProjects[1]?.title}
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                {featuredProjects[1]?.description}
              </p>
            </WobbleCard>

            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-green-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
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
                    ? 'bg-blue-600 text-white'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
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
                <ProjectCard key={idx} project={project} />
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
              href="/contact"
              className="px-8 py-4 rounded-md bg-gradient-to-b from-blue-500 to-blue-700 text-white text-lg font-bold relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
            >
              Get Involved
            </a>
            <a
              href="/events"
              className="px-8 py-4 rounded-md border border-neutral-600 text-white text-lg font-medium relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center hover:border-neutral-400"
            >
              Join Workshop
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}; 