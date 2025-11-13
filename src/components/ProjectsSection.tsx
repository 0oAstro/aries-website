"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Github, ExternalLink, Code2, Star } from "lucide-react";

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
    description: "empowering our guarding angels with latest technology, the youth of this country contributes to its development, here at ARIES.",
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

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.techStack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="relative w-full bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
              AI Projects <span className="font-semibold">Showcase</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the innovative AI projects built by our talented members. From computer vision to NLP, discover the cutting-edge solutions we're developing.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-2 mb-12">
              <Star className="w-6 h-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-light text-foreground">
                <span className="font-semibold">Featured</span> Projects
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredProjects.map((project, idx) => (
                <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50 overflow-hidden">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        Featured
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, techIdx) => (
                        <Badge key={techIdx} variant="outline" className="text-xs font-normal">
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
          <div className="mb-12 space-y-6">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-accent hover:bg-accent/90" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-light text-foreground">
                All Projects <span className="text-muted-foreground">({filteredProjects.length})</span>
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code2 className="w-5 h-5" />
                <span className="text-sm">Open Source</span>
              </div>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredProjects.map((project, idx) => (
                  <Card key={idx} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/50 flex flex-col">
                    <div className="aspect-video overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex gap-2">
                          <a
                            href={project.github}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-border hover:border-accent hover:bg-accent/10 transition-colors"
                            aria-label="View on GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          <a
                            href={project.link}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-border hover:border-accent hover:bg-accent/10 transition-colors"
                            aria-label="View demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-4">
                      <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIdx) => (
                          <Badge key={techIdx} variant="outline" className="text-xs font-normal">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">No projects found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Project Statistics */}
          <div className="py-16 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-light text-center mb-12 text-foreground">
              Project <span className="font-semibold">Impact</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-semibold text-accent">25+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-semibold text-accent">8</div>
                <div className="text-sm text-muted-foreground">Categories Covered</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-semibold text-accent">15+</div>
                <div className="text-sm text-muted-foreground">Technologies Used</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-semibold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Open Source</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="py-16 text-center border-t border-border">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Have a Project Idea?
            </h3>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join our community and collaborate on exciting AI projects. Whether you're a beginner or expert,
              there's always room for innovation and learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.open('https://chat.whatsapp.com/D98xdCtosjr2d8wchQJSvL', '_blank')}
              >
                Get Involved
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.location.href = '/events'}
              >
                Join Workshop
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
