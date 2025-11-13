"use client";

import React from "react";
import { ArrowRight, Sparkles, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative w-full bg-background overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />

      {/* Hero Content */}
      <div className="relative">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
          <div className="max-w-5xl mx-auto">
            {/* Main Heading */}
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent mb-4">
                <Sparkles className="w-4 h-4" />
                <span>IIT Delhi's Premier AI Society</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground">
                Welcome to
                <br />
                <span className="font-semibold text-accent">ARIES</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                Where innovation meets intelligence. Exploring the limitless possibilities of artificial intelligence through research, collaboration, and community.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base"
                  onClick={() => window.open('https://chat.whatsapp.com/D98xdCtosjr2d8wchQJSvL', '_blank')}
                >
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base"
                  onClick={() => window.location.href = '/projects'}
                >
                  Explore Projects
                </Button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-24 md:mt-32 pt-12 border-t border-border">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-foreground">200+</div>
                <div className="text-sm md:text-base text-muted-foreground">Active Members</div>
              </div>
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <Rocket className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-foreground">50+</div>
                <div className="text-sm md:text-base text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-semibold text-foreground">100+</div>
                <div className="text-sm md:text-base text-muted-foreground">Events Hosted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 