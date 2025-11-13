"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

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
    techStack: ["Python", "NLTK", "Flask", "MongoDB"],
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
    <section className="relative w-full bg-primary/5 py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
              Featured <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the innovative AI projects built by our talented members at Aries.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {featuredProjects.map((project, idx) => (
              <Card key={idx} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30 flex flex-col">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.link}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-md border border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors"
                        aria-label="View demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  <CardTitle className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 space-y-6">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIdx) => (
                        <Badge key={techIdx} variant="outline" className="text-xs font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Team:</span> {project.team.join(", ")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Button
              size="lg"
              variant="outline"
              className="group/btn border-primary/30 hover:bg-primary/5 hover:text-primary"
              onClick={() => window.location.href = '/projects'}
            >
              View All Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
