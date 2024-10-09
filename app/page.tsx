"use client";
import React from "react";
import { Card, CardContent } from "@mui/material";
import "../app/globals.css";  
const ProjectShowcase = () => {
  const projects = [
    {
      name: "Mundabit Platform",
      logo: "http://91.106.107.234:8891/api/uploader/identity/logo",
      link: "http://91.106.107.234:8892/login",
    },
    {
      name: "DAL",
      logo: "/assets/icons/dal.png",
      link: "http://vm2:3000/",
    },
    {
      name: "P+",
      logo: "/assets/icons/pplus1.svg",
      link: "https://pplus-demo.masterteam.sa/",
    },
    {
      name: "S+",
      logo: "/assets/icons/splus.svg",
      link: "https://splus-demo.masterteam.sa/",
    },
    {
      name: "Diwan",
      logo: "/assets/icons/diwan.svg",
      link: "https://diwan-demo.masterteam.sa/",
    },
    {
      name: "Jadaya",
      logo: "",
      link: "#",
    },
    {
      name: "Baseer Suite",
      logo: "assets/icons/baseer-logo.png",
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
        {/* <p className="sub-heading ">
          Discover our innovative solutions designed to transform your digital experience.
        </p> */}

        {/* Dynamic Project Grid */}
<div className="card-container">
  {projects.map((project, index) => (
    <a href={project.link} key={index} target="_blank">
      <Card className="card-box">
        <CardContent className="p-10">
          <div className="">
            <img
              src={project.logo}
              alt={`${project.name} logo`}
              className="project-image"
            />
            {/* <h3 className="font-semibold product-name">{project.name}</h3> */}
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
