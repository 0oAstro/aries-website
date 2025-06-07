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
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <ShootingStars 
          minSpeed={10}
          maxSpeed={30}
          minDelay={1200}
          maxDelay={4200}
          starColor="rgb(106,58,196)"
          trailColor="rgb(233,123,177)"
        />
        <StarsBackground starDensity={0.0005} />
      </div>
      
      {/* Spotlight Effects */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="rgb(106,58,196)"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="rgb(233,123,177)"
      />

      {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:space-x-8 items-center justify-center px-4 pt-20 md:pt-24">
          <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light mb-4 lg:mb-8 leading-tight bg-gradient-to-br from-white via-purple-200 to-pink-200 bg-clip-text text-transparent text-center lg:text-left">
            Welcome
            <br />
            To
            <br />
            <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">ARIES</span>
          </span>
          <ReactSVG src="/arieslogo.svg" className="drop-shadow-xl drop-shadow-white/100 scale-50 sm:scale-60 lg:scale-75" width={10} height={10}/>  
        </div>
    </div>
  );
}; 