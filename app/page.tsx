"use client";
import React from "react";
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
          <div className="flex items-center">
            <img 
              src="https://master-works.sa/themes/custom/master_works/logo.png" 
              alt="mw page"
              className="w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] xl:w-[220px] 2xl:w-[240px] h-auto"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16 relative z-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center text-white mb-4">
          Our Products
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto">
          Discover our innovative solutions designed to transform your digital experience.
        </p>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <a 
              href={project.link} 
              key={index} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block transform transition-all duration-300 hover:scale-105"
            >
              <Card
                className="h-full bg-white/10 backdrop-blur-sm text-white border-0 transition-all duration-300 hover:bg-white/20"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
                      {project.name}
                    </h3>
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