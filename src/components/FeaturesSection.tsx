"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code2, Users, Calendar, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI Research & Development",
    description: "Cutting-edge research in machine learning, deep learning, and artificial intelligence applications.",
    icon: Brain,
  },
  {
    title: "Technical Workshops",
    description: "Hands-on workshops covering the latest AI tools, frameworks, and technologies.",
    icon: Code2,
  },
  {
    title: "Innovation Challenges",
    description: "Regular hackathons and coding competitions to push the boundaries of AI innovation.",
    icon: Lightbulb,
  },
  {
    title: "Community Building",
    description: "Building a strong community of AI enthusiasts, researchers, and innovators.",
    icon: Users,
  },
  {
    title: "Industry Connections",
    description: "Guest lectures, industry visits, and networking opportunities with AI professionals.",
    icon: ArrowRight,
  },
  {
    title: "Regular Events",
    description: "Weekly meetups, tech talks, and collaborative project sessions.",
    icon: Calendar,
  },
];

export const FeaturesSection = () => {
  return (
    <section className="relative w-full bg-background py-20 md:py-28 lg:py-36">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20 md:mb-28">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground">
              Artificial Intelligence,
              <br />
              <span className="font-semibold">Machine Learning</span>
              <br />
              <span className="text-muted-foreground">and everything in between</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              ARIES is IIT Delhi's student-led community that brings together curious minds to learn, build, and explore intelligent systems.
            </p>
          </div>

          {/* Not Just Another Club */}
          <div className="text-center mb-20 md:mb-28 py-16 border-y border-border">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Not just <span className="font-semibold text-accent">another club</span>
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              ARIES is a space where ideas turn into research, research turns into products, and people grow into innovators.
            </p>
          </div>

          {/* What We Do */}
          <div className="mb-20 md:mb-28">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-center mb-16 text-foreground">
              What <span className="font-semibold">we do</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-20 md:mb-28">
            {/* Projects Card */}
            <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-10 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <Lightbulb className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      Powerful Projects
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Code that does more than compile - our projects turn curiosity into prototypes, and ideas into impact.
                    From neural networks to robotics, we build solutions that matter.
                  </p>
                  <Button variant="outline" className="group/btn border-primary/30 hover:bg-primary/5 hover:text-primary" onClick={() => window.location.href = '/projects'}>
                    View Projects
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Events Card */}
            <Card className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-10 md:p-12">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      Exciting Events
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    From caffeine-fueled hackathons to talks that actually stick, our events are designed to challenge,
                    connect and leave a mark on your AI journey.
                  </p>
                  <Button variant="outline" className="group/btn border-primary/30 hover:bg-primary/5 hover:text-primary" onClick={() => window.location.href = '/events'}>
                    View Events
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Final CTA */}
          <div className="text-center py-16 border-t border-border">
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to join the AI revolution?
            </h3>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're a beginner or an expert, there's a place for you in our community.
              Let's build the future of AI together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-lg shadow-primary/25"
                onClick={() => window.open('https://chat.whatsapp.com/D98xdCtosjr2d8wchQJSvL', '_blank')}
              >
                Join ARIES
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 border-primary/30 hover:bg-primary/5 hover:text-primary"
                onClick={() => window.location.href = '/events'}
              >
                Upcoming Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
