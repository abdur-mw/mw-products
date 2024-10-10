"use client";
import React from "react";
import { Card, CardContent } from "@mui/material";
import "../app/globals.css";


const ProjectShowcase = () => {
  //projects data
  const projects = [
    {
      id: 1,
      name: "Mundabit Platform",
      logo: "/assets/logos/mundabit-logo.png",
      link: "http://91.106.107.234:8892/login",
      imageWidth: "60%",
      imageHeight: "auto",
    },
    {
      id: 2,
      name: "DAL",
      logo: "/assets/logos/dal.png",
      link: "http://vm2:3000/",
      imageWidth: "70%",
      imageHeight: "300px",
    },
    {
      id: 3,
      name: "P+",
      logo: "/assets/logos/pplus1.svg",
      link: "https://pplus-demo.masterteam.sa/",
      imageWidth: "80%",
      imageHeight: "300px",
    },
    {
      id: 4,
      name: "S+",
      logo: "/assets/logos/splus.svg",
      link: "https://splus-demo.masterteam.sa/",
      imageWidth: "25%",
      imageHeight: "100px ",
    },
    {
      id: 5,
      name: "Diwan",
      logo: "/assets/logos/diwan.svg",
      link: "https://diwan-demo.masterteam.sa/",
      imageWidth: "80%",
      imageHeight: "100px",
    },
    {
      id: 6,
      name: "Jadaya",
      logo: "/assets/logos/JadayaLogo.png",
      link: "#",
      imageWidth: "80%",
      imageHeight: "100px",
    },
    {
      id: 7,
      name: "Baseer Suite",
      logo: "assets/logos/baseer-logo.png",
      link: "http://183.82.144.156:3000/login",
      imageWidth: "80%",
      imageHeight: "100px",
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
        </video>z
      </div>

      {/* Mastworks Logo */}
      <nav className="mw-logo">
        <img
          src="https://master-works.sa/themes/custom/master_works/logo.png"
          alt="mw logo"
          style={{ background: "transparent" }}
        />
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
        <div className="card-container" style={{}}>
          {projects.map((project, index) => (
            <a href={project.link} key={index} target="_blank">
              <Card style={{
              }} className="card-box">
                <CardContent style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: "1em"
                }} className="p-10">
                  <img
                    src={project.logo}
                    alt={`${project.name} logo`}
                    className="project-image"
                    width={project.imageWidth}
                    height={project.imageWidth}
                  />
                  {/* {
                    project.name === "Baseer Suite" ?
                      <h3 style={{
                      }} className="product-name">{"Suite"}</h3>
                      : null
                  } */}
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
