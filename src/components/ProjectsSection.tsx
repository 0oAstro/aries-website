"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Github, ExternalLink, Code2, Star, Sparkles, Zap } from "lucide-react";

const projects = [
  {
    title: "Real life TARS Robot",
    description: "A Replica of the TARS robot from Interstellar, produced by ARIES team in a showcase visit to Japanese Students.",
    link: "#",
    github: "#",
    category: "Robotics",
    techStack: ["Python", "ROS", "Computer Vision", "Hardware"],
    featured: true,
    image: '/projects/tars.png',
    team: []
  },
  {
    title: "ML project for military",
    description: "Empowering our guarding angels with latest technology, the youth of this country contributes to its development, here at ARIES.",
    link: "#",
    github: "#",
    category: "Defense",
    techStack: ["Python", "TensorFlow", "Computer Vision", "Security"],
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
    techStack: ["Python", "OpenCV", "GANs", "Deep Learning"],
    featured: false,
    image: '/projects/tresswap.png',
    team: []
  }
];

const categories = ["All", "Computer Vision", "Natural Language Processing", "Robotics", "Defense", "IoT", "Finance"];

export const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.project-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [selectedCategory]);

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="relative w-full bg-background min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="relative mb-20 text-center space-y-8">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-foreground">
                AI Projects{" "}
                <span className="bg-primary text-primary-foreground px-8 py-4 border-brutal-thicc shadow-brutal-xl inline-block skew-brutal">
                  Showcase
                </span>
              </h1>
              <Zap className="absolute -top-8 -right-8 w-16 h-16 md:w-20 md:h-20 text-secondary animate-wiggle" />
            </div>
            <div className="bg-accent border-brutal-thick shadow-brutal-lg px-8 py-6 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl font-black uppercase tracking-tight">
                Explore the innovative AI projects built by our talented members. From computer vision to NLP.
              </p>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <div className="relative mb-12 inline-block">
              <h2 className="text-3xl md:text-5xl font-black uppercase bg-secondary text-secondary-foreground px-6 py-3 border-brutal shadow-brutal">
                <Star className="inline-block w-8 h-8 mb-1 mr-2" />
                Featured Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              {featuredProjects.map((project, idx) => (
                <Card key={idx} className="group relative border-brutal-thick shadow-brutal-lg hover-lift hover:shadow-brutal-xl transition-all duration-200 bg-card overflow-hidden">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary border-brutal shadow-brutal flex items-center justify-center z-10">
                    <Star className="w-6 h-6 text-primary-foreground fill-current" />
                  </div>
                  <div className="h-3 w-full bg-secondary" />
                  <div className="aspect-video overflow-hidden border-b-brutal">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <Badge className="bg-accent text-accent-foreground border-brutal font-black uppercase text-xs px-3 py-1">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl md:text-2xl font-black uppercase text-foreground tracking-tight border-l-8 border-l-primary pl-4">
                      {project.title}
                    </h3>
                    <p className="text-sm font-bold leading-relaxed uppercase tracking-tight">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIdx) => (
                        <Badge key={techIdx} variant="outline" className="border-brutal font-bold uppercase text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-16 space-y-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-muted-foreground" />
              <Input
                type="text"
                placeholder="SEARCH PROJECTS, TECHNOLOGIES..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-16 h-14 border-brutal shadow-brutal bg-card font-black uppercase text-sm"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`font-black uppercase text-sm px-6 py-3 border-brutal shadow-brutal hover-lift transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-brutal-lg'
                      : 'bg-card text-foreground hover:bg-muted'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-20">
              {filteredProjects.map((project, idx) => (
                <div
                  key={idx}
                  data-id={idx}
                  className={`project-card transition-all duration-700 ${
                    visibleItems.has(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <Card className="group relative border-brutal-thick shadow-brutal-lg hover-lift hover:shadow-brutal-xl transition-all duration-200 bg-card">
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent border-brutal shadow-brutal flex items-center justify-center z-10">
                      <Sparkles className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="h-3 w-full bg-primary" />
                    <div className="aspect-video overflow-hidden border-b-brutal">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-start justify-between">
                        <Badge className="bg-secondary text-secondary-foreground border-brutal font-black uppercase text-xs px-3 py-1">
                          {project.category}
                        </Badge>
                        <div className="flex gap-2">
                          <a href={project.github} className="w-10 h-10 border-brutal bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-brutal hover-lift flex items-center justify-center">
                            <Github className="w-5 h-5" />
                          </a>
                          <a href={project.link} className="w-10 h-10 border-brutal bg-background hover:bg-accent hover:text-accent-foreground transition-colors shadow-brutal hover-lift flex items-center justify-center">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                      <h3 className="text-xl font-black uppercase text-foreground tracking-tight border-l-8 border-l-primary pl-4">
                        {project.title}
                      </h3>
                      <p className="text-sm font-bold leading-relaxed uppercase tracking-tight line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIdx) => (
                          <Badge key={techIdx} variant="outline" className="border-brutal font-bold uppercase text-xs px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-card border-brutal-thick shadow-brutal-lg mb-20">
              <p className="text-2xl font-black uppercase text-muted-foreground">No projects found matching your criteria.</p>
            </div>
          )}

          {/* CTA */}
          <div className="py-16 text-center bg-accent/10 border-brutal-thick shadow-brutal-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary border-brutal-thick shadow-brutal-lg mb-6">
              <Code2 className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="text-3xl md:text-5xl font-black uppercase text-foreground mb-6">
              Have a Project Idea?
            </h3>
            <div className="bg-background border-brutal shadow-brutal px-8 py-6 max-w-2xl mx-auto mb-10">
              <p className="text-lg font-bold uppercase tracking-tight">
                Join our community and collaborate on exciting AI projects. Whether you're a beginner or expert.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground border-brutal-thick shadow-brutal-xl hover-lift transition-all duration-200 font-black uppercase px-10 py-7"
                onClick={() => window.open('https://chat.whatsapp.com/D98xdCtosjr2d8wchQJSvL', '_blank')}
              >
                Get Involved
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-brutal-thick hover:bg-primary hover:text-primary-foreground shadow-brutal hover-lift transition-all duration-200 font-black uppercase px-10 py-7"
                onClick={() => window.location.href = '/events'}
              >
                Join Workshop
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        .animate-wiggle {
          animation: wiggle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
