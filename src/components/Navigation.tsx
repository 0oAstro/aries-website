import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
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
      className="relative z-20 mr-4 flex items-center space-x-3 px-2 py-1 text-sm font-normal text-foreground dark:text-white transition-colors"
    >
      <div className="w-8 h-8 flex items-center justify-center">
        <img src="/arieslogo.svg" alt="Aries Logo" className="w-8 h-8" />
      </div>
      <span className="font-semibold text-xl tracking-tight">
        ARIES
      </span>
    </a>
  );
};

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
}

const ContactButton = () => {
  return (
    <button
      onClick={scrollToBottom}
      className="px-5 py-2.5 rounded-md bg-accent hover:bg-accent/90 text-accent-foreground text-sm font-medium cursor-pointer transition-all duration-200 inline-flex items-center gap-2"
    >
      <Mail className="w-4 h-4" />
      Contact
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
                    ? 'text-accent font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              <ContactButton />
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}; 