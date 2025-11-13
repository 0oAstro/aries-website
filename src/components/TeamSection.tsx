"use client";

import React, { useEffect, useRef } from "react";
import { Instagram, Linkedin, Mail, Sparkles, Zap } from "lucide-react";

interface Social {
  instagram: string;
  linkedin: string;
  email: string;
}

interface TeamMember {
  name: string;
  photo: string;
  socials: Social;
}

interface FacultyHead {
  name: string;
  role: string;
  photo: string;
  bio: string[];
}

interface TeamData {
  facultyHead: FacultyHead;
  overallCoordinators: TeamMember[];
  coordinators: TeamMember[];
  executives: {
    Brain: string[];
    Canvas: string[];
  };
}

interface TeamSectionProps {
  teamData: TeamData;
}

export const TeamSection = ({ teamData }: TeamSectionProps) => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-brutal');
    fadeElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderMemberCard = (member: TeamMember, idx: number) => (
    <div
      key={idx}
      className="fade-in-brutal opacity-0 transition-opacity duration-700"
      style={{ animationDelay: `${idx * 0.1}s` }}
    >
      <div className="group relative bg-card border-brutal shadow-brutal hover-lift hover:shadow-brutal-lg transition-all duration-200">
        <div className="absolute -top-3 -right-3 w-12 h-12 bg-secondary border-brutal flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-foreground" />
        </div>

        <div className="p-6 space-y-4">
          <div className="aspect-square w-full bg-primary/20 border-brutal overflow-hidden relative">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <h4 className="text-xl font-black text-foreground uppercase tracking-tight">
            {member.name}
          </h4>

          <div className="flex gap-3 items-center justify-center">
            {member.socials.instagram && (
              <a
                href={member.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary border-brutal shadow-brutal hover-lift flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
            )}
            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-accent border-brutal shadow-brutal hover-lift flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-accent-foreground" />
              </a>
            )}
            {member.socials.email && (
              <a
                href={member.socials.email}
                className="w-10 h-10 bg-secondary border-brutal shadow-brutal hover-lift flex items-center justify-center hover:bg-secondary/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-secondary-foreground" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const brain = [...teamData.executives.Brain.map(n => n.trim())].sort((a, b) => a.localeCompare(b));
  const canvas = [...teamData.executives.Canvas.map(n => n.trim())].sort((a, b) => a.localeCompare(b));
  const maxLen = Math.max(brain.length, canvas.length);
  while (brain.length < maxLen) brain.push("");
  while (canvas.length < maxLen) canvas.push("");

  const split = (arr: string[]): [string[], string[]] => {
    const half = Math.ceil(arr.length / 2);
    return [arr.slice(0, half), arr.slice(half)];
  };

  const [brain1, brain2] = split(brain);
  const [canvas1, canvas2] = split(canvas);

  return (
    <main className="relative min-h-screen bg-background">
      {/* Hero Image */}
      <section className="relative border-b-brutal">
        <div className="w-full h-[60vh] overflow-hidden relative">
          <img
            src="/images/people/family_photo.png"
            alt="ARIES Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground uppercase tracking-tighter border-brutal bg-secondary inline-block px-8 py-4 shadow-brutal-xl skew-brutal-reverse">
                Meet The ARIES CREW!
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-20 space-y-32">
        {/* Faculty Head */}
        <section className="fade-in-brutal opacity-0">
          <div className="relative mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-6xl font-black uppercase bg-primary text-primary-foreground px-8 py-4 border-brutal shadow-brutal-xl relative">
                Faculty Head
                <Zap className="absolute -top-4 -right-4 w-12 h-12 text-secondary animate-bounce" />
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center border-brutal-thick shadow-brutal-xl bg-card p-8 md:p-12">
            <div className="space-y-6">
              <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-primary/20 border-brutal-thick shadow-brutal-lg overflow-hidden">
                <img
                  src={teamData.facultyHead.photo}
                  alt={teamData.facultyHead.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center space-y-3 bg-secondary border-brutal p-6">
                <h3 className="text-3xl font-black uppercase">{teamData.facultyHead.name}</h3>
                <p className="text-lg font-bold text-muted-foreground whitespace-pre-line">
                  {teamData.facultyHead.role}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {teamData.facultyHead.bio.map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-relaxed text-foreground font-medium">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Overall Coordinators */}
        <section className="fade-in-brutal opacity-0">
          <div className="relative mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-6xl font-black uppercase bg-accent text-accent-foreground px-8 py-4 border-brutal shadow-brutal-xl">
                Overall Coordinators
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamData.overallCoordinators.map((member, idx) => renderMemberCard(member, idx))}
          </div>
        </section>

        {/* Coordinators */}
        <section className="fade-in-brutal opacity-0">
          <div className="relative mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-6xl font-black uppercase bg-primary text-primary-foreground px-8 py-4 border-brutal shadow-brutal-xl skew-brutal">
                Coordinators
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamData.coordinators.map((member, idx) => renderMemberCard(member, idx))}
          </div>
        </section>

        {/* Executives */}
        <section className="fade-in-brutal opacity-0">
          <div className="relative mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-6xl font-black uppercase bg-secondary text-secondary-foreground px-8 py-4 border-brutal shadow-brutal-xl">
                Executives
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brain 1 */}
            <div className="border-brutal-thick shadow-brutal-lg bg-primary/10 p-8 hover-lift">
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 bg-primary text-primary-foreground px-4 py-2 border-brutal inline-block">
                Brain
              </h3>
              <ul className="space-y-3">
                {brain1.map((name: string, i: number) =>
                  name ? (
                    <li key={i} className="text-lg font-bold uppercase tracking-tight border-l-4 border-primary pl-3">
                      {name}
                    </li>
                  ) : (
                    <li key={i} className="invisible">
                      &nbsp;
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Brain 2 */}
            <div className="border-brutal-thick shadow-brutal-lg bg-primary/10 p-8 hover-lift">
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 bg-primary text-primary-foreground px-4 py-2 border-brutal inline-block">
                Brain
              </h3>
              <ul className="space-y-3">
                {brain2.map((name: string, i: number) =>
                  name ? (
                    <li key={i} className="text-lg font-bold uppercase tracking-tight border-l-4 border-primary pl-3">
                      {name}
                    </li>
                  ) : (
                    <li key={i} className="invisible">
                      &nbsp;
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Canvas 1 */}
            <div className="border-brutal-thick shadow-brutal-lg bg-accent/10 p-8 hover-lift">
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 bg-accent text-accent-foreground px-4 py-2 border-brutal inline-block">
                Canvas
              </h3>
              <ul className="space-y-3">
                {canvas1.map((name: string, i: number) =>
                  name ? (
                    <li key={i} className="text-lg font-bold uppercase tracking-tight border-l-4 border-accent pl-3">
                      {name}
                    </li>
                  ) : (
                    <li key={i} className="invisible">
                      &nbsp;
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Canvas 2 */}
            <div className="border-brutal-thick shadow-brutal-lg bg-accent/10 p-8 hover-lift">
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 bg-accent text-accent-foreground px-4 py-2 border-brutal inline-block">
                Canvas
              </h3>
              <ul className="space-y-3">
                {canvas2.map((name: string, i: number) =>
                  name ? (
                    <li key={i} className="text-lg font-bold uppercase tracking-tight border-l-4 border-accent pl-3">
                      {name}
                    </li>
                  ) : (
                    <li key={i} className="invisible">
                      &nbsp;
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .fade-in-brutal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1),
            transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .fade-in-brutal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </main>
  );
};
