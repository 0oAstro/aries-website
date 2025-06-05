"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { 
  IconCode, 
  IconBrain, 
  IconUsers, 
  IconTrophy,
  IconCalendarEvent,
  IconRocket,
  IconBulb
} from "@tabler/icons-react";

const features = [
  {
    title: "AI Research & Development",
    description: "Cutting-edge research in machine learning, deep learning, and artificial intelligence applications.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
      <IconBrain className="h-8 w-8 text-blue-500" />
    </div>,
    className: "md:col-span-2",
    icon: <IconBrain className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Technical Workshops",
    description: "Hands-on workshops covering the latest AI tools, frameworks, and technologies.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
      <IconCode className="h-8 w-8 text-purple-500" />
    </div>,
    className: "md:col-span-1",
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Community Building",
    description: "Building a strong community of AI enthusiasts, researchers, and innovators.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
      <IconUsers className="h-8 w-8 text-green-500" />
    </div>,
    className: "md:col-span-1",
    icon: <IconUsers className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Innovation Challenges",
    description: "Regular hackathons and coding competitions to push the boundaries of AI innovation.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
      <IconTrophy className="h-8 w-8 text-yellow-500" />
    </div>,
    className: "md:col-span-1",
    icon: <IconTrophy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Industry Connections",
    description: "Guest lectures, industry visits, and networking opportunities with AI professionals.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
      <IconRocket className="h-8 w-8 text-red-500" />
    </div>,
    className: "md:col-span-1",
    icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Regular Events",
    description: "Weekly meetups, tech talks, and collaborative project sessions.",
    header: <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 items-center justify-center">
      <IconCalendarEvent className="h-8 w-8 text-cyan-500" />
    </div>,
    className: "md:col-span-2",
    icon: <IconCalendarEvent className="h-4 w-4 text-neutral-500" />,
  },
];

export const FeaturesSection = () => {
  return (
    <div className="relative w-full bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <IconBulb className="h-8 w-8 text-blue-500 mr-3" />
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              What We Offer
            </h2>
          </div>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Aries provides a comprehensive platform for AI learning, research, and innovation at IIT Delhi.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="max-w-6xl mx-auto">
          {features.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}; 