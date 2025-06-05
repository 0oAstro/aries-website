"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { IconBrandLinkedin, IconBrandGithub, IconMail } from "@tabler/icons-react";

// Mock data - replace with actual team data
const coordinatorCards = [
  {
    title: "Arjun Sharma - Technical Coordinator",
    src: "https://placehold.co/600x400.png",
  },
  {
    title: "Priya Gupta - Events Coordinator",
    src: "https://placehold.co/600x400.png",
  },
  {
    title: "Rohit Kumar - Research Coordinator",
    src: "https://placehold.co/600x400.png",
  },
];

// Coordinator details for the custom cards
const coordinatorDetails = [
  {
    name: "Arjun Sharma",
    role: "Technical Coordinator",
    description: "Leading AI research initiatives and managing technical workshops. Specializes in deep learning and computer vision.",
    avatar: "https://placehold.co/600x400.png",
    initials: "AS"
  },
  {
    name: "Priya Gupta", 
    role: "Events Coordinator",
    description: "Organizing workshops, hackathons, and community events. Expert in project management and team coordination.",
    avatar: "https://placehold.co/600x400.png",
    initials: "PG"
  },
  {
    name: "Rohit Kumar",
    role: "Research Coordinator", 
    description: "Supervising AI research projects and academic collaborations. Focus on NLP and machine learning applications.",
    avatar: "https://placehold.co/600x400.png",
    initials: "RK"
  }
];

const brainExecutives = [
  "Ankit Verma", "Sneha Patel", "Vikram Singh", "Neha Joshi", "Amit Agarwal",
  "Pooja Sharma", "Rahul Mishra", "Kavya Reddy", "Siddharth Gupta", "Ritu Saxena",
  "Harshit Kumar", "Anjali Mehta", "Nikhil Jain", "Shweta Singh", "Varun Chopra",
  "Megha Bansal", "Karan Sethi", "Divya Nair", "Abhinav Goel", "Simran Kaur"
];

const canvasExecutives = [
  "Aditya Tiwari", "Shreya Kulkarni", "Manish Yadav", "Preeti Arora", "Gaurav Pandey",
  "Sakshi Agrawal", "Rohan Malhotra", "Nidhi Bhardwaj", "Ashish Raj", "Pallavi Jha",
  "Kaushal Shah", "Riya Sinha", "Deepak Kumar", "Ishita Garg", "Aryan Khanna",
  "Tanvi Gupta", "Mohit Sharma", "Sonal Tripathi", "Utkarsh Dubey", "Aditi Rao",
  "Praveen Singh", "Meera Jain", "Akash Agarwal", "Aarti Mishra", "Harsh Vardhan"
];

export const TeamSection = () => {
  return (
    <div className="relative w-full bg-black min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full Team Photo Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Meet Our Team
          </h1>
          <div className="w-full max-w-4xl mx-auto mb-8">
            <img 
              src="https://placehold.co/600x400.png" 
              alt="Aries Team Photo" 
              className="w-full h-64 md:h-96 object-cover rounded-2xl border border-neutral-800"
            />
          </div>
          <p className="text-lg text-neutral-300">
            The brilliant minds behind Aries AI Society at IIT Delhi
          </p>
        </div>

        <Separator className="mb-16" />

        {/* Organizing Committee */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Organizing Committee
          </h2>
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-8 rounded-2xl border border-neutral-700 max-w-md">
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://placehold.co/600x400.png" />
                  <AvatarFallback>OC</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold text-white">Aditya Sharma</h3>
                  <Badge className="bg-blue-600">President</Badge>
                </div>
              </div>
              <p className="text-neutral-300 mb-4">
                Leading the vision and strategy of Aries AI Society. Final year student specializing in AI and Machine Learning.
              </p>
              <div className="flex space-x-3">
                <IconBrandLinkedin className="w-6 h-6 text-blue-400 cursor-pointer hover:text-blue-300" />
                <IconBrandGithub className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-300" />
                <IconMail className="w-6 h-6 text-green-400 cursor-pointer hover:text-green-300" />
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-16" />

        {/* Coordinators Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Coordinators
          </h2>
          <FocusCards cards={coordinatorCards} />
          
          {/* Detailed Coordinator Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {coordinatorDetails.map((coordinator, idx) => (
              <div key={idx} className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl border border-neutral-700">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={coordinator.avatar} />
                    <AvatarFallback>{coordinator.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-white">{coordinator.name}</h3>
                    <Badge variant="secondary">{coordinator.role}</Badge>
                  </div>
                </div>
                <p className="text-neutral-300 mb-4">
                  {coordinator.description}
                </p>
                <div className="flex space-x-3">
                  <IconBrandLinkedin className="w-5 h-5 text-blue-400 cursor-pointer hover:text-blue-300" />
                  <IconBrandGithub className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-300" />
                  <IconMail className="w-5 h-5 text-green-400 cursor-pointer hover:text-green-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="mb-16" />

        {/* Executives Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Executive Team
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Brain Executives */}
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">
                Brain Executives
              </h3>
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-neutral-700 p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-white">Name</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {brainExecutives.map((name, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="text-neutral-300">{name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Canvas Executives */}
            <div>
              <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
                Canvas Executives
              </h3>
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl border border-neutral-700 p-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-white">Name</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {canvasExecutives.map((name, idx) => (
                      <TableRow key={idx}>
                        <TableCell className="text-neutral-300">{name}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>

        {/* Join Team CTA */}
        <div className="text-center py-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to Join Our Team?
          </h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our AI community. 
            Check out our recruitment opportunities and become part of the innovation.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 rounded-md bg-gradient-to-b from-blue-500 to-blue-700 text-white text-lg font-bold relative cursor-pointer hover:-translate-y-1 transition duration-300 inline-block text-center shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}; 