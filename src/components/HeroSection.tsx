"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, width, height } = logoRef.current.getBoundingClientRect();
      const x = (clientX - left - width / 2) / 25;
      const y = (clientY - top - height / 2) / 25;
      logoRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.02)`;
    };

    const handleMouseLeave = () => {
      if (!logoRef.current) return;
      logoRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    };

    const logo = logoRef.current;
    if (logo) {
      logo.addEventListener('mousemove', handleMouseMove);
      logo.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (logo) {
        logo.removeEventListener('mousemove', handleMouseMove);
        logo.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="relative w-full bg-background overflow-hidden">
      {/* Atmospheric background */}
      <div className="absolute inset-0 gradient-mesh noise" />

      {/* Hero Content */}
      <div className="relative">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-56 lg:pb-40">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="space-y-8 lg:space-y-10">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">IIT Delhi's Premier AI Society</span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.95] tracking-tight">
                    Welcome to{" "}
                    <span className="inline-block relative">
                      <span className="relative z-10 bg-gradient-to-br from-primary via-primary/80 to-accent bg-clip-text text-transparent font-serif italic">
                        ARIES
                      </span>
                      <span className="absolute inset-0 blur-xl bg-gradient-to-br from-primary/30 to-accent/30 -z-10" />
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                    Where innovation meets intelligence. Exploring the limitless possibilities of artificial intelligence through research, collaboration, and community.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base shadow-2xl shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:-translate-y-0.5"
                    onClick={() => window.open('https://chat.whatsapp.com/D98xdCtosjr2d8wchQJSvL', '_blank')}
                  >
                    Join Our Community
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-6 text-base border-2 border-primary/30 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300"
                    onClick={() => window.location.href = '/projects'}
                  >
                    Explore Projects
                  </Button>
                </div>
              </div>

              {/* Right: Aries Logo */}
              <div className="flex justify-center lg:justify-end">
                <div
                  ref={logoRef}
                  className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 transition-transform duration-200 ease-out"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow effect layers */}
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
                  <div className="absolute inset-8 bg-accent/15 blur-2xl rounded-full animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />

                  {/* Logo */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src="/arieslogo.svg"
                      alt="Aries Spirit Animal"
                      className="relative w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>

                  {/* Orbiting accent dots */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 shadow-lg shadow-primary/50" />
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                    <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-accent rounded-full -translate-x-1/2 shadow-lg shadow-accent/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 lg:mt-32 pt-12 border-t border-border/50">
              {[
                { icon: Users, value: "200+", label: "Active Members", delay: "0s" },
                { icon: Rocket, value: "50+", label: "Projects Completed", delay: "0.1s" },
                { icon: Sparkles, value: "100+", label: "Events Hosted", delay: "0.2s" }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="group text-center space-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 group-hover:from-primary/20 group-hover:to-accent/10 transition-all duration-300 border border-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-5xl md:text-6xl font-serif font-semibold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm md:text-base text-muted-foreground font-medium tracking-wide">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};
