"use client";

import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Spotlight } from "@/components/ui/spotlight";

const heroText = "Pioneering the Future of Artificial Intelligence at IIT Delhi";
const subText = "Where innovation meets intelligence. Join us in exploring the limitless possibilities of AI technology.";

export const HeroSection = () => {
  return (
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <ShootingStars />
      <StarsBackground />
      
      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="blue"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <div className="mb-8">
          <TextGenerateEffect
            words={heroText}
            className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          />
        </div>

        {/* Subtitle */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
            {subText}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/projects"
            className="px-8 py-4 rounded-md bg-gradient-to-b from-blue-500 to-blue-700 text-white text-lg font-bold relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] min-w-[200px]"
          >
            Explore Projects
          </a>
          <a
            href="/events"
            className="px-8 py-4 rounded-md border border-neutral-600 text-white text-lg font-medium relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center hover:border-neutral-400 min-w-[200px]"
          >
            View Events
          </a>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-sm text-neutral-400">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">25+</div>
            <div className="text-sm text-neutral-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">15+</div>
            <div className="text-sm text-neutral-400">Events Organized</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">3+</div>
            <div className="text-sm text-neutral-400">Years Active</div>
          </div>
        </div>
      </div>
    </div>
  );
}; 