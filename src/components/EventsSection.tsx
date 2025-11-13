"use client";

import React, { useState, useEffect } from "react";
import { Calendar, MapPin, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  isPast: boolean;
}

interface EventsSectionProps {
  upcomingEvents: Event[];
  pastEvents: Event[];
}

export const EventsSection = ({ upcomingEvents, pastEvents }: EventsSectionProps) => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [visibleCount, setVisibleCount] = useState(6);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.event-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [activeTab, visibleCount]);

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;
  const displayedEvents = currentEvents.slice(0, visibleCount);
  const hasMore = visibleCount < currentEvents.length;

  return (
    <div className="relative min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className="relative mb-20">
            <div className="text-center space-y-8">
              <div className="relative inline-block">
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter text-foreground">
                  Our{" "}
                  <span className="bg-primary text-primary-foreground px-8 py-4 border-brutal-thicc shadow-brutal-xl inline-block skew-brutal">
                    Events
                  </span>
                </h1>
                <Sparkles className="absolute -top-8 -right-8 w-16 h-16 md:w-20 md:h-20 text-secondary animate-wiggle" />
              </div>
              <div className="bg-accent border-brutal-thick shadow-brutal-lg px-8 py-6 max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl font-black uppercase tracking-tight">
                  Engage, Learn and Innovate with ARIES
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-16">
            <button
              onClick={() => {
                setActiveTab('upcoming');
                setVisibleCount(6);
              }}
              className={`px-8 py-4 font-black uppercase text-lg tracking-tight border-brutal-thick shadow-brutal hover-lift transition-all duration-200 ${
                activeTab === 'upcoming'
                  ? 'bg-primary text-primary-foreground shadow-brutal-xl'
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => {
                setActiveTab('past');
                setVisibleCount(6);
              }}
              className={`px-8 py-4 font-black uppercase text-lg tracking-tight border-brutal-thick shadow-brutal hover-lift transition-all duration-200 ${
                activeTab === 'past'
                  ? 'bg-primary text-primary-foreground shadow-brutal-xl'
                  : 'bg-card text-foreground hover:bg-muted'
              }`}
            >
              Past Events
            </button>
          </div>

          {/* Events Grid */}
          {displayedEvents.length === 0 ? (
            <div className="text-center py-20 bg-card border-brutal-thick shadow-brutal-lg">
              <p className="text-2xl font-black uppercase text-muted-foreground">
                No {activeTab} events scheduled. Check back later!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {displayedEvents.map((event, idx) => (
                <div
                  key={idx}
                  data-id={idx}
                  className={`event-item group relative transition-all duration-700 ${
                    visibleItems.has(idx) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${(idx % 6) * 100}ms` }}
                >
                  <div className="relative border-brutal-thick shadow-brutal-lg hover-lift hover:shadow-brutal-xl transition-all duration-200 bg-card overflow-hidden">
                    {/* Accent Corner */}
                    <div className={`absolute -top-4 -right-4 w-12 h-12 ${event.isPast ? 'bg-muted' : 'bg-secondary'} border-brutal shadow-brutal flex items-center justify-center z-10`}>
                      <Sparkles className={`w-6 h-6 ${event.isPast ? 'text-muted-foreground' : 'text-secondary-foreground'}`} />
                    </div>

                    {/* Image */}
                    <div className="relative h-48 overflow-hidden border-b-brutal">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {event.isPast && (
                        <div className="absolute inset-0 bg-background/60" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div className={`h-2 w-full ${event.isPast ? 'bg-muted' : 'bg-secondary'}`} />

                      <h3 className="text-xl md:text-2xl font-black uppercase text-foreground tracking-tight border-l-8 border-l-primary pl-4 line-clamp-2">
                        {event.title}
                      </h3>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-bold uppercase">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold uppercase">
                          <MapPin className="w-4 h-4 text-accent" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-sm font-bold leading-relaxed uppercase tracking-tight line-clamp-3">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* View More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button
                size="lg"
                onClick={() => setVisibleCount(prev => prev + 6)}
                className="bg-accent hover:bg-accent/90 text-accent-foreground border-brutal-thick shadow-brutal-xl hover-lift hover:shadow-brutal-accent transition-all duration-200 font-black uppercase px-10 py-7"
              >
                View More
                <ChevronDown className="ml-2 w-6 h-6" />
              </Button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-5deg);
          }
          75% {
            transform: rotate(5deg);
          }
        }

        .animate-wiggle {
          animation: wiggle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
