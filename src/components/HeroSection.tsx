"use client";

import React from "react";
import { ArrowRight, Sparkles, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative w-full bg-background overflow-hidden">
      {/* Subtle purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background pointer-events-none" />

      {/* Hero Content */}
      <div className="relative">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-36">
          <div className="max-w-6xl mx-auto">
            {/* Main Heading with Logo */}
            <div className="text-center space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-2">
                <Sparkles className="w-4 h-4" />
                <span>IIT Delhi's Premier AI Society</span>
              </div>

              {/* Aries Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <img
                    src="/arieslogo.svg"
                    alt="Aries Spirit Animal Logo"
                    className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 drop-shadow-2xl"
                  />
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground">
                Welcome to
                <br />
                <span className="font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  ARIES
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Where innovation meets intelligence. Exploring the limitless possibilities of artificial intelligence through research, collaboration, and community.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base shadow-lg shadow-primary/25"
                  onClick={() => window.open('https://chat.whatsapp.com/D98xdCtosjr2d8wchQJSvL', '_blank')}
                >
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base border-primary/30 hover:bg-primary/5"
                  onClick={() => window.location.href = '/projects'}
                >
                  Explore Projects
                </Button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-20 md:mt-24 pt-12 border-t border-border">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-semibold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">200+</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Active Members</div>
              </div>
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3">
                  <Rocket className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-semibold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">50+</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Projects Completed</div>
              </div>
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-semibold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">100+</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">Events Hosted</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 