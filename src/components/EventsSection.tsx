"use client";

import React, { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { IconSearch, IconCalendar, IconMapPin, IconUsers } from "@tabler/icons-react";

// Mock event data
const events = [
  {
    title: "AI Workshop: Deep Learning Fundamentals",
    description: "Comprehensive workshop covering neural networks, backpropagation, and practical implementation using PyTorch. Perfect for beginners looking to dive into deep learning.",
    link: "#",
    date: "2024-03-15",
    type: "Workshop",
    status: "upcoming",
    location: "LH-101, IIT Delhi",
    attendees: 150
  },
  {
    title: "Hackathon: AI for Social Good",
    description: "24-hour hackathon focused on developing AI solutions for real-world social problems. Prizes worth ₹50,000 for the top teams.",
    link: "#",
    date: "2024-03-20",
    type: "Hackathon", 
    status: "upcoming",
    location: "Computer Center, IIT Delhi",
    attendees: 200
  },
  {
    title: "Guest Lecture: Computer Vision in Industry",
    description: "Industry expert from NVIDIA shares insights on the latest computer vision technologies and their applications in autonomous vehicles and robotics.",
    link: "#",
    date: "2024-02-28",
    type: "Lecture",
    status: "past",
    location: "Bharti Building, IIT Delhi",
    attendees: 300
  },
  {
    title: "ML Research Symposium",
    description: "Student presentations on cutting-edge machine learning research projects, including poster sessions and networking opportunities.",
    link: "#",
    date: "2024-02-15",
    type: "Conference",
    status: "past",
    location: "Seminar Hall, IIT Delhi",
    attendees: 180
  },
  {
    title: "Python for AI Bootcamp",
    description: "Intensive 3-day bootcamp covering Python programming, NumPy, Pandas, and Scikit-learn for AI applications.",
    link: "#",
    date: "2024-04-10",
    type: "Bootcamp",
    status: "upcoming",
    location: "Lab Complex, IIT Delhi",
    attendees: 100
  },
  {
    title: "AI Ethics Panel Discussion",
    description: "Panel discussion with faculty and industry experts on the ethical implications of AI, bias in algorithms, and responsible AI development.",
    link: "#",
    date: "2024-04-05",
    type: "Panel",
    status: "upcoming", 
    location: "Dogra Hall, IIT Delhi",
    attendees: 250
  }
];

const getEventsByStatus = (status: string) => {
  return events.filter(event => event.status === status);
};

const EventCard = ({ event }: { event: typeof events[0] }) => (
  <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-neutral-700 p-6 hover:border-neutral-600 transition-colors">
    <div className="flex justify-between items-start mb-4">
      <Badge 
        variant={event.status === 'upcoming' ? 'default' : 'secondary'}
        className={event.status === 'upcoming' ? 'bg-green-600' : 'bg-gray-600'}
      >
        {event.type}
      </Badge>
      <span className="text-sm text-neutral-400">{event.date}</span>
    </div>
    
    <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
    <p className="text-neutral-300 mb-4 line-clamp-3">{event.description}</p>
    
    <div className="space-y-2 mb-4">
      <div className="flex items-center text-sm text-neutral-400">
        <IconMapPin className="w-4 h-4 mr-2" />
        {event.location}
      </div>
      <div className="flex items-center text-sm text-neutral-400">
        <IconUsers className="w-4 h-4 mr-2" />
        {event.attendees} attendees
      </div>
    </div>
    
    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors">
      {event.status === 'upcoming' ? 'Register Now' : 'View Details'}
    </button>
  </div>
);

export const EventsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const filteredEvents = (status: string) => {
    return getEventsByStatus(status).filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="relative w-full bg-black min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Events & Workshops
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Join our exciting events, workshops, and hackathons to learn, build, and connect with the AI community at IIT Delhi.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 grid md:grid-cols-3 gap-8">
          {/* Search Bar */}
          <div className="md:col-span-2">
            <div className="relative">
              <IconSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <Input
                type="text"
                placeholder="Search events, workshops, hackathons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-400"
              />
            </div>
          </div>

          {/* Calendar Filter */}
          <div className="hidden md:block">
            <div className="bg-neutral-900 rounded-lg border border-neutral-700 p-4">
              <h3 className="text-white font-semibold mb-3 flex items-center">
                <IconCalendar className="w-4 h-4 mr-2" />
                Calendar
              </h3>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border-0"
              />
            </div>
          </div>
        </div>

        {/* Events Tabs */}
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-neutral-900">
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-blue-600">
              Upcoming Events ({filteredEvents('upcoming').length})
            </TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-blue-600">
              Past Events ({filteredEvents('past').length})
            </TabsTrigger>
          </TabsList>

          {/* Upcoming Events */}
          <TabsContent value="upcoming" className="space-y-8">
            {filteredEvents('upcoming').length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents('upcoming').map((event, idx) => (
                  <EventCard key={idx} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-neutral-400 text-lg">No upcoming events found.</p>
              </div>
            )}
          </TabsContent>

          {/* Past Events */}
          <TabsContent value="past" className="space-y-8">
            {filteredEvents('past').length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents('past').map((event, idx) => (
                  <EventCard key={idx} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-neutral-400 text-lg">No past events found.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Event Statistics */}
        <div className="mt-20 py-16 border-t border-neutral-800">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Event Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
              <div className="text-sm text-neutral-400">Events Organized</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">2000+</div>
              <div className="text-sm text-neutral-400">Total Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">8</div>
              <div className="text-sm text-neutral-400">Workshops Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
              <div className="text-sm text-neutral-400">Hackathons Hosted</div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 py-16 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-neutral-800">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming events, workshops, and exciting opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-400"
            />
            <button className="px-6 py-2 bg-gradient-to-b from-blue-500 to-blue-700 text-white font-bold rounded-md hover:-translate-y-0.5 transition duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 