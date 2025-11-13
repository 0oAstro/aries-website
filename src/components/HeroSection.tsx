"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Users, Rocket, Zap, Code2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-background overflow-hidden">
      {/* Brutal Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 left-10 w-24 h-24 bg-primary border-brutal-thick shadow-brutal-lg animate-bounce"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-secondary border-brutal-thick shadow-brutal-lg animate-wiggle"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px) rotate(45deg)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent border-brutal shadow-brutal animate-bounce"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
          transition: 'transform 0.3s ease-out',
          animationDelay: '0.5s'
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Text Content */}
              <div className="space-y-8 lg:space-y-10 animate-slide-in-left">
                <div className="inline-flex items-center gap-3 px-6 py-3 border-brutal bg-primary shadow-brutal">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                  <span className="text-base font-black uppercase text-primary-foreground tracking-tight">
                    IIT Delhi's Premier AI Society
                  </span>
                </div>

                <div className="space-y-6">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] leading-[0.9] tracking-tighter font-black uppercase">
                    Welcome to{" "}
                    <span className="relative inline-block">
                      <span className="relative z-10 bg-primary text-primary-foreground px-6 py-2 border-brutal-thick shadow-brutal-xl inline-block skew-brutal-reverse">
                        ARIES
                      </span>
                    </span>
                  </h1>

                  <div className="bg-secondary border-brutal-thick shadow-brutal-lg px-8 py-6 max-w-xl">
                    <p className="text-lg md:text-xl font-bold leading-relaxed uppercase tracking-tight">
                      Where innovation meets intelligence. Exploring the limitless possibilities of artificial intelligence.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-base font-black uppercase border-brutal shadow-brutal hover-lift hover:shadow-brutal-lg transition-all duration-200"
                    onClick={() => window.open('https://chat.whatsapp.com/D98xdCtosjr2d8wchQJSvL', '_blank')}
                  >
                    Join Our Community
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="px-10 py-7 text-base font-black uppercase border-brutal-thick hover:bg-accent hover:text-accent-foreground shadow-brutal hover-lift hover:shadow-brutal-lg transition-all duration-200"
                    onClick={() => window.location.href = '/projects'}
                  >
                    Explore Projects
                  </Button>
                </div>
              </div>

              {/* Right: Aries Logo with Brutal Frame */}
              <div className="flex justify-center lg:justify-end animate-slide-in-right">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  {/* Decorative corners */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary border-brutal-thick shadow-brutal-lg z-20">
                    <Star className="w-full h-full p-3 text-primary-foreground animate-wiggle" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-secondary border-brutal-thick shadow-brutal-lg z-20">
                    <Zap className="w-full h-full p-3 text-secondary-foreground animate-bounce" />
                  </div>

                  {/* Main logo container */}
                  <div className="relative border-brutal-thicc shadow-brutal-xl bg-accent/10 p-8 md:p-12 hover-lift transition-all duration-300">
                    <div className="aspect-square relative">
                      <img
                        src="/arieslogo.svg"
                        alt="Aries Spirit Animal"
                        className="relative w-full h-full object-contain drop-shadow-2xl"
                      />
                      {/* Accent lines */}
                      <div className="absolute top-0 right-0 w-full h-2 bg-primary" />
                      <div className="absolute bottom-0 left-0 w-2 h-full bg-secondary" />
                    </div>
                  </div>

                  {/* Floating accent elements */}
                  <div className="absolute -top-4 right-1/4 w-12 h-12 bg-accent border-brutal shadow-brutal animate-bounce" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute -bottom-8 left-1/3 w-16 h-16 bg-primary border-brutal-thick shadow-brutal-lg animate-wiggle" style={{ animationDelay: '0.7s' }} />
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24 lg:mt-32 pt-12 border-t-brutal-thick">
              {[
                { icon: Users, value: "200+", label: "Active Members", color: "primary", delay: "0s" },
                { icon: Rocket, value: "50+", label: "Projects Completed", color: "secondary", delay: "0.1s" },
                { icon: Code2, value: "100+", label: "Events Hosted", color: "accent", delay: "0.2s" }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                const bgColor = stat.color === "primary" ? "bg-primary" : stat.color === "secondary" ? "bg-secondary" : "bg-accent";
                const textColor = stat.color === "primary" ? "text-primary-foreground" : stat.color === "secondary" ? "text-secondary-foreground" : "text-accent-foreground";

                return (
                  <div
                    key={idx}
                    className="group relative opacity-0 animate-slide-in-up"
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className="text-center space-y-4 border-brutal-thick shadow-brutal hover-lift hover:shadow-brutal-lg transition-all duration-200 p-6 bg-card">
                      <div className={`inline-flex items-center justify-center w-20 h-20 border-brutal shadow-brutal ${bgColor}`}>
                        <Icon className={`w-10 h-10 ${textColor}`} />
                      </div>
                      <div className="space-y-2">
                        <div className={`text-5xl md:text-6xl font-black uppercase ${stat.color === "primary" ? "text-primary" : stat.color === "secondary" ? "text-secondary" : "text-accent"}`}>
                          {stat.value}
                        </div>
                        <div className="text-sm md:text-base font-black uppercase tracking-tight text-foreground">
                          {stat.label}
                        </div>
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
