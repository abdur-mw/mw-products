"use client";
import React from "react";
import {  ExternalLink } from "lucide-react";
import { Card, CardContent } from "@mui/material";

const ProjectShowcase = () => {
  const projects = [
    {
      name: "Mundabit Platform",
      logo: "https://master-works.sa/themes/custom/master_works/logo.png",
      link: "http://91.106.107.234:8892/login"
    },
    {
      name: "DAL",
      logo: "https://master-works.sa/themes/custom/master_works/logo.png",
      link: "http://vm2:3000/"
    },
    {
      name: "P+",
      logo: "https://master-works.sa/themes/custom/master_works/logo.png",
      link: "https://pplus-demo.masterteam.sa/"
    },
    {
      name: "S+",
      logo: "https://master-works.sa/themes/custom/master_works/logo.png",
      link: "https://splus-demo.masterteam.sa/"
    },
    {
      name: "Diwan",
      logo: "https://master-works.sa/themes/custom/master_works/logo.png",
      link: "https://diwan-demo.masterteam.sa/"
    },
    {
      name: "Jadaya",
      logo: "https://master-works.sa/themes/custom/master_works/logo.png",
      link: "#"
    },
    {
      name: "BASEER Suite",
      logo: "https://master-works.sa/themes/custom/master_works/logo.png",
      link: "http://183.82.144.156:3000/login"
    }
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
          <source src="/assets/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Mastworks Logo */}
      <nav className="p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="https://master-works.sa/themes/custom/master_works/logo.png" 
              alt="mw page"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        <h1 className="text-[5vw] font-bold text-center text-white mb-4">
          Our Products
        </h1>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-[2vw]">
          Discover our innovative solutions designed to transform your digital experience.
        </p>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <a href={project.link} key={index} target="_blank" rel="noopener noreferrer">
              <Card
                className="bg-white/10 backdrop-blur-sm text-white transition-all duration-300 transform hover:scale-105 hover:bg-white/20"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="font-semibold text-[1.5vw]">{project.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProjectShowcase;