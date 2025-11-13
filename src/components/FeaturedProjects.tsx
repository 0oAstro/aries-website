"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowRight, Code2, Star } from "lucide-react";

const featuredProjects = [
  {
    title: "Neural Style Transfer",
    description: "An advanced deep learning project that applies artistic styles to images using convolutional neural networks and transfer learning techniques. Built with PyTorch and optimized for real-time processing.",
    link: "#",
    github: "#",
    category: "Computer Vision",
    techStack: ["Python", "PyTorch", "OpenCV", "NumPy"],
    image: "https://placehold.co/600x400.png",
    team: ["Arjun Sharma", "Priya Gupta"],
    color: "primary"
  },
  {
    title: "Sentiment Analysis Bot",
    description: "Real-time sentiment analysis using NLP techniques to understand emotions in social media data and customer feedback. Includes web dashboard and API endpoints.",
    link: "#",
    github: "#",
    category: "Natural Language Processing",
    techStack: ["Python", "NLTK", "Flask", "MongoDB"],
    image: "https://placehold.co/600x400.png",
    team: ["Rohit Kumar", "Sneha Patel"],
    color: "secondary"
  },
  {
    title: "Autonomous Campus Navigation",
    description: "AI-powered navigation system for IIT Delhi campus using computer vision, path planning algorithms, and real-time obstacle detection for autonomous vehicles.",
    link: "#",
    github: "#",
    category: "Robotics",
    techStack: ["Python", "ROS", "TensorFlow", "OpenCV"],
    image: "https://placehold.co/600x400.png",
    team: ["Vikram Singh", "Neha Joshi"],
    color: "accent"
  }
];

export const FeaturedProjects = () => {
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

    const elements = document.querySelectorAll('.project-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-accent/5 py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-8 mb-16 md:mb-20">
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-foreground">
                Featured{" "}
                <span className="bg-primary text-primary-foreground px-6 py-2 border-brutal-thick shadow-brutal-xl inline-block skew-brutal">
                  Projects
                </span>
              </h2>
              <Code2 className="absolute -top-6 -right-8 w-12 h-12 text-secondary animate-wiggle" />
            </div>
            <div className="bg-secondary border-brutal shadow-brutal px-8 py-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl font-bold uppercase tracking-tight">
                Discover the innovative AI projects built by our talented members at Aries.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
            {featuredProjects.map((project, idx) => {
              const bgColor = project.color === "primary" ? "bg-primary" : project.color === "secondary" ? "bg-secondary" : "bg-accent";
              const textColor = project.color === "primary" ? "text-primary-foreground" : project.color === "secondary" ? "text-secondary-foreground" : "text-accent-foreground";

              return (
                <div
                  key={idx}
                  data-id={idx}
                  className={`project-item transition-all duration-700 ${
                    visibleItems.has(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <Card className="group relative border-brutal-thick shadow-brutal-lg hover-lift hover:shadow-brutal-xl transition-all duration-200 bg-card flex flex-col h-full">
                    <div className={`absolute -top-4 -right-4 w-12 h-12 ${bgColor} border-brutal shadow-brutal flex items-center justify-center z-10`}>
                      <Star className={`w-6 h-6 ${textColor}`} />
                    </div>

                    <div className={`h-3 w-full ${bgColor}`} />

                    <CardContent className="p-8 flex-1 space-y-6 flex flex-col">
                      <div className="flex items-start justify-between">
                        <Badge className={`${bgColor} ${textColor} border-brutal font-black uppercase text-xs px-3 py-1`}>
                          {project.category}
                        </Badge>
                        <div className="flex gap-2">
                          <a
                            href={project.github}
                            className="inline-flex items-center justify-center w-10 h-10 border-brutal bg-background hover:bg-primary hover:text-primary-foreground transition-colors shadow-brutal hover-lift"
                            aria-label="View on GitHub"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <a
                            href={project.link}
                            className="inline-flex items-center justify-center w-10 h-10 border-brutal bg-background hover:bg-accent hover:text-accent-foreground transition-colors shadow-brutal hover-lift"
                            aria-label="View demo"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </div>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-black uppercase text-foreground tracking-tight border-l-8 border-l-primary pl-4">
                        {project.title}
                      </h3>

                      <p className="font-bold leading-relaxed uppercase text-sm tracking-tight flex-1">
                        {project.description}
                      </p>

                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIdx) => (
                            <Badge
                              key={techIdx}
                              variant="outline"
                              className="border-brutal font-black uppercase text-xs px-3 py-1"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        <div className="pt-4 border-t-brutal">
                          <p className="text-sm font-black uppercase">
                            Team: <span className="font-bold">{project.team.join(", ")}</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground border-brutal-thick shadow-brutal-xl hover-lift hover:shadow-brutal-primary transition-all duration-200 font-black uppercase px-10 py-7"
              onClick={() => window.location.href = '/projects'}
            >
              View All Projects
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
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
    </section>
  );
};
