"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export const FeaturedProjects = () => {
  return (
    <div className="relative w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Discover the innovative AI projects built by our talented members at Aries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Neural Style Transfer
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                An advanced deep learning project that applies artistic styles to images using convolutional neural networks and transfer learning techniques.
              </p>
            </div>
            <div className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl">
              <div className="w-40 h-40 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full opacity-50"></div>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-900">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Sentiment Analysis Bot
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Real-time sentiment analysis using NLP techniques to understand emotions in social media data and customer feedback.
            </p>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Autonomous Campus Navigation
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                An AI-powered navigation system for IIT Delhi campus using computer vision, path planning algorithms, and real-time obstacle detection for autonomous vehicles.
              </p>
            </div>
            <div className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl">
              <div className="w-60 h-40 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg opacity-50"></div>
            </div>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-green-900">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Medical Diagnosis AI
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              Computer vision model for early disease detection from medical imaging data using deep convolutional networks.
            </p>
          </WobbleCard>

          <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-purple-900 min-h-[500px] lg:min-h-[300px]">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Smart Energy Management
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                IoT-based energy optimization system using machine learning to predict and reduce energy consumption in smart buildings.
              </p>
            </div>
            <div className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl">
              <div className="w-40 h-40 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full opacity-50"></div>
            </div>
          </WobbleCard>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="px-8 py-4 rounded-md bg-gradient-to-b from-blue-500 to-blue-700 text-white text-lg font-bold relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
}; 