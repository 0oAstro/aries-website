"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Users, Calendar, Lightbulb, ArrowRight, Sparkles, Zap, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI Research & Development",
    description: "Cutting-edge research in machine learning, deep learning, and artificial intelligence applications.",
    icon: Brain,
    color: "primary"
  },
  {
    title: "Technical Workshops",
    description: "Hands-on workshops covering the latest AI tools, frameworks, and technologies.",
    icon: Code2,
    color: "secondary"
  },
  {
    title: "Innovation Challenges",
    description: "Regular hackathons and coding competitions to push the boundaries of AI innovation.",
    icon: Lightbulb,
    color: "accent"
  },
  {
    title: "Community Building",
    description: "Building a strong community of AI enthusiasts, researchers, and innovators.",
    icon: Users,
    color: "primary"
  },
  {
    title: "Industry Connections",
    description: "Guest lectures, industry visits, and networking opportunities with AI professionals.",
    icon: Trophy,
    color: "secondary"
  },
  {
    title: "Regular Events",
    description: "Weekly meetups, tech talks, and collaborative project sessions.",
    icon: Calendar,
    color: "accent"
  },
];

export const FeaturesSection = () => {
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

    const elements = document.querySelectorAll('.feature-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-background py-24 md:py-32 lg:py-40">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary border-brutal-thick shadow-brutal-lg animate-wiggle opacity-20" />
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-secondary border-brutal shadow-brutal opacity-20 animate-bounce" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-8 mb-24 md:mb-32">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-foreground">
                Artificial Intelligence,
                <br />
                <span className="bg-primary text-primary-foreground px-6 py-2 border-brutal-thick shadow-brutal-xl inline-block skew-brutal">
                  Machine Learning
                </span>
                <br />
                <span className="text-4xl md:text-6xl lg:text-7xl text-muted-foreground font-black">
                  AND EVERYTHING IN BETWEEN
                </span>
              </h2>
              <Sparkles className="absolute -top-8 -right-8 w-16 h-16 text-accent animate-bounce" />
            </div>
            <div className="bg-secondary border-brutal-thick shadow-brutal-lg px-8 py-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl font-bold uppercase tracking-tight">
                ARIES is IIT Delhi's student-led community that brings together curious minds to learn, build, and explore intelligent systems.
              </p>
            </div>
          </div>

          {/* Not Just Another Club */}
          <div className="text-center mb-28 md:mb-36 py-16 md:py-20 border-y-brutal-thick relative">
            <div className="relative space-y-8">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-foreground">
                Not just{" "}
                <span className="relative inline-block">
                  <span className="bg-accent text-accent-foreground px-6 py-2 border-brutal-thick shadow-brutal-xl inline-block">
                    ANOTHER CLUB
                  </span>
                </span>
              </h3>
              <div className="bg-primary/10 border-brutal shadow-brutal px-8 py-6 max-w-4xl mx-auto">
                <p className="text-lg md:text-2xl font-bold uppercase tracking-tight">
                  ARIES is a space where ideas turn into research, research turns into products, and people grow into innovators.
                </p>
              </div>
              <Zap className="absolute -top-6 right-1/4 w-12 h-12 text-secondary animate-wiggle" />
            </div>
          </div>

          {/* What We Do */}
          <div className="mb-28 md:mb-36">
            <div className="relative mb-20">
              <div className="inline-block">
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase border-brutal-thick shadow-brutal-xl bg-accent text-accent-foreground px-8 py-4">
                  What <span className="skew-brutal-reverse inline-block">WE DO</span>
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                const bgColor = feature.color === "primary" ? "bg-primary" : feature.color === "secondary" ? "bg-secondary" : "bg-accent";
                const textColor = feature.color === "primary" ? "text-primary-foreground" : feature.color === "secondary" ? "text-secondary-foreground" : "text-accent-foreground";
                const borderColor = feature.color === "primary" ? "border-l-primary" : feature.color === "secondary" ? "border-l-secondary" : "border-l-accent";

                return (
                  <div
                    key={idx}
                    data-id={idx}
                    className={`feature-item transition-all duration-700 ${
                      visibleItems.has(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <Card className="group relative border-brutal-thick shadow-brutal hover-lift hover:shadow-brutal-xl transition-all duration-200 bg-card h-full">
                      <div className={`absolute -top-4 -right-4 w-12 h-12 ${bgColor} border-brutal shadow-brutal flex items-center justify-center z-10`}>
                        <Icon className={`w-6 h-6 ${textColor}`} />
                      </div>

                      <CardContent className="p-8 h-full flex flex-col">
                        <div className="space-y-5 flex-1">
                          <div className={`h-2 w-full ${bgColor}`} />
                          <h4 className="text-2xl font-black uppercase text-foreground tracking-tight border-l-8 ${borderColor} pl-4">
                            {feature.title}
                          </h4>
                          <p className="font-bold leading-relaxed uppercase text-sm tracking-tight">
                            {feature.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-28 md:mb-36">
            {/* Projects Card */}
            <Card className="group relative border-brutal-thicc shadow-brutal-xl hover-lift hover:shadow-brutal-primary transition-all duration-200">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary border-brutal-thick shadow-brutal-lg">
                <Lightbulb className="w-full h-full p-3 text-primary-foreground animate-bounce" />
              </div>
              <CardContent className="p-12 md:p-14">
                <div className="space-y-7">
                  <div className="h-3 w-full bg-primary" />
                  <h4 className="text-3xl md:text-5xl font-black uppercase text-foreground tracking-tighter">
                    Powerful Projects
                  </h4>
                  <p className="font-bold leading-relaxed text-lg uppercase tracking-tight">
                    Code that does more than compile - our projects turn curiosity into prototypes, and ideas into impact.
                    From neural networks to robotics, we build solutions that matter.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full md:w-auto border-brutal-thick hover:bg-primary hover:text-primary-foreground shadow-brutal hover-lift hover:shadow-brutal-lg transition-all duration-200 font-black uppercase py-6 px-8"
                    onClick={() => window.location.href = '/projects'}
                  >
                    View Projects
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Events Card */}
            <Card className="group relative border-brutal-thicc shadow-brutal-xl hover-lift hover:shadow-brutal-accent transition-all duration-200">
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-accent border-brutal-thick shadow-brutal-lg">
                <Calendar className="w-full h-full p-3 text-accent-foreground animate-wiggle" />
              </div>
              <CardContent className="p-12 md:p-14">
                <div className="space-y-7">
                  <div className="h-3 w-full bg-accent" />
                  <h4 className="text-3xl md:text-5xl font-black uppercase text-foreground tracking-tighter">
                    Exciting Events
                  </h4>
                  <p className="font-bold leading-relaxed text-lg uppercase tracking-tight">
                    From caffeine-fueled hackathons to talks that actually stick, our events are designed to challenge,
                    connect and leave a mark on your AI journey.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full md:w-auto border-brutal-thick hover:bg-accent hover:text-accent-foreground shadow-brutal hover-lift hover:shadow-brutal-lg transition-all duration-200 font-black uppercase py-6 px-8"
                    onClick={() => window.location.href = '/events'}
                  >
                    View Events
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center py-20 border-t-brutal-thicc relative">
            <div className="relative space-y-8">
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-foreground">
                Ready to join the{" "}
                <span className="bg-primary text-primary-foreground px-6 py-2 border-brutal-thick shadow-brutal-xl inline-block">
                  AI REVOLUTION
                </span>?
              </h3>
              <div className="bg-secondary/20 border-brutal shadow-brutal px-8 py-6 max-w-2xl mx-auto">
                <p className="text-lg md:text-xl font-bold uppercase tracking-tight">
                  Whether you're a beginner or an expert, there's a place for you in our community.
                  Let's build the future of AI together.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 shadow-brutal-xl border-brutal-thick hover-lift hover:shadow-brutal-primary transition-all duration-200 font-black uppercase"
                  onClick={() => window.open('https://chat.whatsapp.com/D98xdCtosjr2d8wchQJSvL', '_blank')}
                >
                  Join ARIES
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-10 py-7 border-brutal-thick hover:bg-accent hover:text-accent-foreground shadow-brutal hover-lift hover:shadow-brutal-lg transition-all duration-200 font-black uppercase"
                  onClick={() => window.location.href = '/events'}
                >
                  Upcoming Events
                </Button>
              </div>
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
    </section>
  );
};
