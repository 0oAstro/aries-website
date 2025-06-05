"use client";

import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Spotlight } from "@/components/ui/spotlight";
import { ReactSVG } from 'react-svg'

const heroText = "Welcome to ARIES"
const subText = "Where innovation meets intelligence. Join us in exploring the limitless possibilities of AI technology.";

export const HeroSection = () => {
  return (
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <ShootingStars />
      <StarsBackground starDensity={0.005} />
      
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
        <div className="flex flex-row space-apart items-center">
          <span className="text-6xl lg:text-7xl font-light mb-8 leading-tight">
            Welcome
            <br />
            To
            <br />
            <span className="font-bold">ARIES</span>
          </span>
          <ReactSVG src="/arieslogo.svg" className="drop-shadow-xl drop-shadow-white/100 scale-75" width={10} height={10}/>  
        </div>
    </div>
  );
}; 