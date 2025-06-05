"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

const navigationItems = [
  { name: "Home", link: "/" },
  { name: "Events", link: "/events" },
  { name: "Projects", link: "/projects" },
  { name: "Our Legacy", link: "/legacy" },
  { name: "Team", link: "/team" },
  { name: "Gallery", link: "/gallery" },
  { name: "Contact Us", link: "/contact" },
];

const AriesLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-3 px-2 py-1 text-sm font-normal text-white"
    >
      {/* Temporary AI-themed icon until logo is provided */}
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 flex items-center justify-center">
        <span className="text-white font-bold text-sm">A</span>
      </div>
      <span className="font-bold text-xl text-white">
        Aries
      </span>
    </a>
  );
};

const JoinButton = () => {
  return (
    <a
      href="/contact"
      className="px-6 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-700 text-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
    >
      Join Aries
    </a>
  );
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="fixed top-0">
      <NavBody>
        <AriesLogo />
        <NavItems items={navigationItems} />
        <JoinButton />
      </NavBody>

      <MobileNav>
        <MobileNavHeader>
          <AriesLogo />
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex flex-col space-y-4 w-full">
            {navigationItems.map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <JoinButton />
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}; 