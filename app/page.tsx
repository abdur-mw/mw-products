"use client";
import React from "react";
import { Card, CardContent } from "@mui/material";
import  "/home/abdur-mw/mw/mw-product/app/globals.css"
const ProjectShowcase = () => {
  const projects = [
    {
      name: "Mundabit Platform",
      logo: "/assets/icons/leejam.png",
      link: "http://91.106.107.234:8892/login",
    },
    {
      name: "DAL",
      logo: "/assets/icons/baseer-fav-icon.png",
      link: "http://vm2:3000/",
    },
    {
      name: "P+",
      logo: "/assets/icons/baseer-fav-icon.png",
      link: "https://pplus-demo.masterteam.sa/",
    },
    {
      name: "S+",
      logo: "/assets/icons/tms.png",
      link: "https://splus-demo.masterteam.sa/",
    },
    {
      name: "Diwan",
      logo: "/assets/icons/splus.png",
      link: "https://diwan-demo.masterteam.sa/",
    },
    {
      name: "Jadaya",
      logo: "https://master-works.sa/themes/custom/master_works/logo.png",
      link: "#",
    },
    {
      name: "Baseer Suite",
      logo: "https://master-works.sa/themes/custom/master_works/logo.png",
      link: "http://183.82.144.156:3000/login",
    },
  ];

  return (
    <div>
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
      <nav className="mw-logo">
        <div>
          <img
            src="https://master-works.sa/themes/custom/master_works/logo.png"
            alt="mw logo"
            style={{ background: "transparent" }}
          />
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="h1">
          Our Products
        </h1>
        <p className="sub-heading ">
          Discover our innovative solutions designed to transform your digital experience.
        </p>

        {/* Dynamic Project Grid */}
        <div className="card-conatianer">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              target="_blank"
            >
              <Card
                className="card-box"
              >
                <CardContent className="p-10">
                  <div className="flex items-center justify-between">
                    {/* <img
                      src={project.logo}
                      alt={`${project.name} logo`}
                      className="w-12 h-12 rounded-full p-1 object-cover transition-transform duration-200 hover:scale-105"
                    /> */}
                    <h3 className="font-semibold product-name">{project.name}</h3>
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
