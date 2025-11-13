"use client";

import { useState, useEffect } from "react";
import { Mail, Menu, X } from "lucide-react";

const navigationItems = [
  { name: "Events", link: "/events" },
  { name: "Projects", link: "/projects" },
  { name: "Legacy", link: "/legacy" },
  { name: "Team", link: "/team" },
  { name: "Gallery", link: "/gallery" },
];

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

  function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-brutal shadow-brutal">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center gap-3 hover-lift transition-transform"
            >
              <div className="w-12 h-12 bg-foreground border-brutal shadow-brutal flex items-center justify-center p-2">
                <img src="/arieslogo.svg" alt="Aries Logo" className="w-full h-full invert" />
              </div>
              <span className="font-black text-2xl uppercase tracking-tighter text-foreground">
                ARIES
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navigationItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className={`px-4 py-2 font-black uppercase text-sm tracking-tight transition-all duration-200 hover-lift ${
                    isActivePage(item.link)
                      ? 'bg-primary text-primary-foreground border-brutal shadow-brutal'
                      : 'text-foreground hover:bg-card border-brutal border-transparent hover:border-border'
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={scrollToBottom}
                className="ml-2 px-6 py-2 bg-accent text-accent-foreground font-black uppercase text-sm border-brutal shadow-brutal hover-lift transition-all duration-200 inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-12 h-12 bg-primary text-primary-foreground border-brutal shadow-brutal hover-lift flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-card border-b-brutal shadow-brutal-xl">
            <div className="container mx-auto px-6 py-8 space-y-4">
              {navigationItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className={`block px-6 py-4 font-black uppercase text-lg tracking-tight transition-all duration-200 hover-lift ${
                    isActivePage(item.link)
                      ? 'bg-primary text-primary-foreground border-brutal shadow-brutal'
                      : 'bg-background border-brutal hover:bg-muted'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  scrollToBottom();
                  setIsOpen(false);
                }}
                className="w-full px-6 py-4 bg-accent text-accent-foreground font-black uppercase text-lg border-brutal shadow-brutal hover-lift transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
