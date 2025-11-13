"use client";

import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import { Award, TrendingUp, Users, Zap, Trophy, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    title: "The Kickoff",
    year: "2023",
    points: ["Bootstrapped IIT Delhi's first dedicated AI-ML society", "Started small, built from scratch"]
  },
  {
    title: "Expansion Mode",
    year: "2024",
    points: ["Hosted packed events, hackathons, and bootcamps", "Collaborated with tech companies and student communities"]
  },
  {
    title: "Vertical Launch and infra upgrade",
    year: "2025",
    points: ["Split into two verticals — Canvas for research, Brain for events", "Allows us to go deeper without overlap", "Fully revamped our website", "Turned scattered docs into a central hub for projects, content, and resources"]
  },
  {
    title: "Ongoing Journey",
    year: "Present",
    points: ["Still student-run, still curiosity-led", "Building smarter, scaling wider, keeping it real"]
  }
].reverse();

const timelineData = achievements.map((a) => {
  return {
    title: a.year,
    content: (
      <div key={a.year} className="bg-card border-brutal shadow-brutal p-6 hover-lift transition-all duration-200">
        <h3 className="text-2xl md:text-3xl font-black uppercase text-foreground mb-4 border-l-8 border-l-primary pl-4">{a.title}</h3>
        <div className="space-y-3">
          <h4 className="font-black text-accent text-sm uppercase tracking-wide">Milestones</h4>
          <ul className="space-y-2">
            {a.points.map((p) => (
              <li key={p} className="flex gap-3 font-bold uppercase text-sm">
                <span className="text-accent font-black">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
});

const pastLeaders = [
  {
    name: "Vaibhav Seth",
    batch: "Batch of 2025",
    description: "A compassionate core and a calming presence. His grace under pressure and unwavering support shaped the very heartbeat of ARIES. Thank you for leading with kindness and quiet strength."
  },
  {
    name: "Rudrakshi Singhal",
    batch: "Batch of 2025",
    description: "Smart, driven and a true visionary. Her incredible work ethic and sharp mind inspired us all to push boundaries and dream bigger. Her legacy will echo in every project we take on."
  }
];

export const LegacySection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-id') || '';
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.legacy-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-8">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-foreground">
                Our{" "}
                <span className="bg-primary text-primary-foreground px-6 py-2 border-brutal-thick shadow-brutal-xl inline-block skew-brutal">
                  Legacy
                </span>
              </h1>
              <Trophy className="absolute -top-8 -right-8 w-16 h-16 text-secondary animate-bounce" />
            </div>
            <div className="bg-secondary border-brutal-thick shadow-brutal-lg px-8 py-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl font-bold uppercase tracking-tight">
                From humble beginnings to becoming IIT Delhi's premier AI society, our journey has been marked by
                innovation, dedication, and the relentless pursuit of excellence in artificial intelligence.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20 legacy-item" data-id="timeline">
            <Timeline data={timelineData} />
          </div>

          {/* Impact Statistics */}
          <div
            className={`py-16 mb-20 bg-accent/10 border-brutal-thick shadow-brutal-lg legacy-item transition-all duration-700 ${
              visibleItems.has('stats') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-id="stats"
          >
            <div className="relative mb-12">
              <div className="inline-block">
                <h2 className="text-3xl md:text-5xl font-black uppercase bg-accent text-accent-foreground px-6 py-3 border-brutal shadow-brutal">
                  Our <span className="skew-brutal-reverse inline-block">Impact</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto px-6">
              <div className="text-center space-y-4 bg-card border-brutal-thick shadow-brutal hover-lift transition-all duration-200 p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary border-brutal shadow-brutal mb-2">
                  <Award className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-5xl md:text-6xl font-black uppercase text-primary">5</div>
                <div className="space-y-1">
                  <div className="font-black uppercase text-foreground">Research Papers</div>
                  <div className="text-sm font-bold uppercase text-muted-foreground">Published & presented</div>
                </div>
              </div>
              <div className="text-center space-y-4 bg-card border-brutal-thick shadow-brutal hover-lift transition-all duration-200 p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary border-brutal shadow-brutal mb-2">
                  <TrendingUp className="w-10 h-10 text-secondary-foreground" />
                </div>
                <div className="text-5xl md:text-6xl font-black uppercase text-secondary">15+</div>
                <div className="space-y-1">
                  <div className="font-black uppercase text-foreground">Industry Partners</div>
                  <div className="text-sm font-bold uppercase text-muted-foreground">Leading AI companies</div>
                </div>
              </div>
              <div className="text-center space-y-4 bg-card border-brutal-thick shadow-brutal hover-lift transition-all duration-200 p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent border-brutal shadow-brutal mb-2">
                  <Users className="w-10 h-10 text-accent-foreground" />
                </div>
                <div className="text-5xl md:text-6xl font-black uppercase text-accent">3000+</div>
                <div className="space-y-1">
                  <div className="font-black uppercase text-foreground">Lives Impacted</div>
                  <div className="text-sm font-bold uppercase text-muted-foreground">Through our initiatives</div>
                </div>
              </div>
            </div>
          </div>

          {/* Past Trailblazers */}
          <div
            className={`mb-20 legacy-item transition-all duration-700 ${
              visibleItems.has('trailblazers') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-id="trailblazers"
          >
            <div className="relative mb-12">
              <div className="inline-block">
                <h2 className="text-3xl md:text-5xl font-black uppercase bg-secondary text-secondary-foreground px-6 py-3 border-brutal shadow-brutal">
                  Past Trailblazers
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {pastLeaders.map((leader, idx) => (
                <Card key={idx} className="border-brutal-thick shadow-brutal-lg hover-lift hover:shadow-brutal-xl transition-all duration-200">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary border-brutal shadow-brutal flex items-center justify-center z-10">
                    <Sparkles className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardHeader className="border-b-brutal">
                    <CardTitle className="text-2xl md:text-3xl font-black uppercase text-foreground tracking-tight">{leader.name}</CardTitle>
                    <CardDescription className="text-sm font-black uppercase tracking-wide">{leader.batch}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="font-bold leading-relaxed uppercase text-sm tracking-tight">
                      {leader.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Future Vision */}
          <div
            className={`py-16 text-center bg-gradient-to-b from-primary/10 to-accent/10 border-brutal-thick shadow-brutal-xl legacy-item transition-all duration-700 ${
              visibleItems.has('future') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            data-id="future"
          >
            <div className="max-w-4xl mx-auto px-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent border-brutal-thick shadow-brutal-lg mb-6">
                <Zap className="w-10 h-10 text-accent-foreground" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-foreground mb-6">
                Looking Ahead
              </h2>
              <div className="bg-background border-brutal shadow-brutal px-8 py-6 mb-10">
                <p className="text-lg font-bold uppercase tracking-tight leading-relaxed">
                  As we continue our journey, we remain committed to pushing the boundaries of AI research,
                  fostering innovation, and building the next generation of AI leaders who will shape the future.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground border-brutal-thick shadow-brutal-xl hover-lift hover:shadow-brutal-accent transition-all duration-200 font-black uppercase px-10 py-7"
                  onClick={() => window.location.href = '/events'}
                >
                  Join Our Journey
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brutal-thick hover:bg-primary hover:text-primary-foreground shadow-brutal hover-lift hover:shadow-brutal-lg transition-all duration-200 font-black uppercase px-10 py-7"
                  onClick={() => window.location.href = '/team'}
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
