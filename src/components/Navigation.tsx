import { useState, useEffect } from "react";
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
  { name: "Events", link: "/events" },
  { name: "Projects", link: "/projects" },
  { name: "Our Legacy", link: "/legacy" },
  { name: "Team", link: "/team" },
  { name: "Gallery", link: "/gallery" },
];

const AriesLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-3 px-2 py-1 text-sm font-normal text-white"
    >
      {/* Temporary AI-themed icon until logo is provided */}
      <div className="w-8 h-8 rounded-full ring-2 ring-blue-500 flex items-center justify-center bg-white">
        <img src="/arieslogo.svg" alt="Aries Logo" className="w-6 h-6" />
      </div>
      <span className="font-bold text-xl text-white">
        ARIES
      </span>
    </a>
  );
};

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth' // Optional: for smooth scrolling
  })
}

const ContactButton = () => {
  return (
    <button
      onClick={scrollToBottom}
      className="px-6 py-2 rounded-md bg-gradient-to-b from-indigo-500 to-indigo-700 text-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
    >
      Contact Us
    </button>
  );
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActivePage = (link: string) => {
    if (link === '/' && currentPath === '/') return true;
    if (link !== '/' && currentPath.startsWith(link)) return true;
    return false;
  };

  return (
    <Navbar className="fixed top-0">
      <NavBody>
        <AriesLogo />
        <NavItems items={navigationItems} currentPath={currentPath} />
        <ContactButton />
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
                className={`transition-colors ${
                  isActivePage(item.link)
                    ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <ContactButton />
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}; 