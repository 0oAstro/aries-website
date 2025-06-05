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
import { LampContainer } from '@/components/ui/lamp'
import {buttonVariants} from '@/components/ui/button'


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
      {/* Text container */}
      <div className="flex flex-col items-center justify-center px-10 gap-y-2">
        <p className="text-white text-center text-3xl font-medium">Artificial Intelligence, Machine Learning and everything in between</p>
        <p className="text-white text-center text-lg">ARIES is IIT Delhi's student-led community that brings together curious minds to learn, build, and explore intelligent systems.</p>
        <p className="mt-10 text-white text-center text-3xl font-medium">Not just another club</p>
        <p className="text-white text-center text-lg">ARIES a space where ideas turn into research, research turns into products, and people grow into innovators.</p>
      </div>
      
      <LampContainer>

        {/* TODO REPLACE THIS WITH GRID BECAUSE THEY DON'T LINE UP WELL */}
        <p className="text-white text-center text-4xl font-medium">What we do</p>
        <div className="my-10 flex flex-row space-apart gap-10 justify-center items-center">
          <p className="text-white text-center text-2xl font-medium">Powerful Projects</p>
          <div className="flex flex-col justify-center align-center gap-4">
            <span>Code that does more than compile - our projects turn curiosity into prototypes, and ideas into impact</span>
            <div>
              <a href="/projects" className={buttonVariants({ variant: 'default' })}>View Projects</a>
            </div>
          </div>
        </div>

        <div className="my-10 flex flex-row space-apart gap-10 justify-center items-center">
          <p className="text-white text-center text-2xl font-medium">Exciting Events</p>
          <div className="flex flex-col justify-center align-center gap-4">
            <span>From caffeine-fueled hackathons to talks that actually stick , our events are designed to challenge, connect and leave a mark.</span>
            <div>
              <a href="/projects" className={buttonVariants({ variant: 'default' })}>View Projects</a>
            </div>
          </div>
        </div>
      </LampContainer>
    </div>
  );
}; 