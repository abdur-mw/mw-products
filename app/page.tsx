"use client";
import React from "react";
import {  ExternalLink } from "lucide-react";
import { Card, CardContent } from "@mui/material";
import Masterworks from "@/public/assets/icons/Masterworks";

const ProjectShowcase = () => {

  const cardsPerRow = 3

  const projects = [
    {
      name: "Leejam",
      logo: "/assets/icons/leejam.png",  
      description: "Saudi Arabia-based company that operates a chain of fitness centers called Fitness Time",
    },
    {
      name: "Percepto",
      logo: "/assets/icons/baseer-fav-icon.png",   
      description: "Seamless IoT integration for modern homes",
    },
    {
      name: "Baseer",
      logo: "/assets/icons/baseer-fav-icon.png",   
      description: "Baseer revolutionizes computer vision for organizations.",
    },
    {
      name: "TMS",
      logo: "/assets/icons/tms.png",   
      description: "Enterprise-grade cloud security solution",
    },
    {
      name: "Splus",
      logo: "/assets/icons/splus.png",   
      description: "Interactive data visualization platform",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/assets/bg.mp4"  
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/*Mastworks Logo  */}
      <nav className="p-4 sticky top-0 z-50 bg-transparent">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Masterworks />
          </div>
        </div>
          
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-5xl font-bold text-center text-white mb-4">
          Our Products
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover our innovative solutions designed to transform your digital experience.
        </p>

        {/* Dynamic Project Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-${cardsPerRow} gap-8`}
          style={{ gridTemplateColumns: `repeat(${cardsPerRow}, 1fr)` }}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm text-white transition-all duration-300 transform  shadow-md"
              style={{
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
              <img
                src={project.logo}
                alt={`${project.name} logo`}
                className="w-12 h-12 rounded-full   p-1    object-cover transition-transform duration-200 hover:scale-105" />
                <h3 className="font-semibold text-xl">{project.name}</h3>
                <ExternalLink size={20} className="cursor-pointer" /> 
                </div>
                <div >
                
                </div>
                <p className="text-gray-800">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectShowcase;
