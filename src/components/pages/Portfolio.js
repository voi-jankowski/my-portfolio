import React from "react";
import Project from "../Project";

const Portfolio = () => {
  const projects = [
    {
      title: "Marvelites",
      image: "https://i.imgur.com/8BjZjZ4.png",
      deployedLink: "https://voi-jankowski.github.io/marvel/",
      githubLink: "https://github.com/voi-jankowski/marvel",
    },
    {
      title: "Social Network Back End",
      image: "https://i.imgur.com/8BjZjZ4.png",
      deployedLink: "https://voi-jankowski.github.io/social-network-api",
      githubLink: "https://github.com/voi-jankowski/social-network-api",
    },
    {
      title: "TechTonic Blog",
      image: "https://i.imgur.com/8BjZjZ4.png",
      deployedLink: "https://safe-sea-90944.herokuapp.com/",
      githubLink: "https://github.com/voi-jankowski/tech-blog",
    },
    {
      title: "E-commerce Back End",
      image: "https://i.imgur.com/8BjZjZ4.png",
      deployedLink: "https://github.com/voi-jankowski/e-commerce-back-end",
      githubLink: "https://github.com/voi-jankowski/e-commerce-back-end",
    },
    // {
    // title: "README Generator",
    // image: "https://i.imgur.com/8BjZjZ4.png",
    // deployedLink: "https://github.com/voi-jankowski/professional-README-generator",
    // githubLink: "https://github.com/voi-jankowski/professional-README-generator",
    // },
    {
      title: "Weather Dashboard",
      image: "https://i.imgur.com/8BjZjZ4.png",
      deployedLink: "https://voi-jankowski.github.io/weather-dashboard/",
      githubLink: "https://github.com/voi-jankowski/weather-dashboard",
    },
    {
      title: "Work Day Scheduler",
      image: "https://i.imgur.com/8BjZjZ4.png",
      deployedLink: "https://voi-jankowski.github.io/work-day-scheduler/",
      githubLink: "https://github.com/voi-jankowski/work-day-scheduler",
    },
    {
      title: "Password Generator",
      image: "https://i.imgur.com/8BjZjZ4.png",
      deployedLink: "https://voi-jankowski.github.io/password-generator/",
      githubLink: "https://github.com/voi-jankowski/password-generator",
    },
    // {
    // title: "NoteTaker",
    // image: "https://i.imgur.com/8BjZjZ4.png",
    // deployedLink: "https://note-taker-27-04-2023.herokuapp.com/",
    // githubLink: "https://github.com/voi-jankowski/note-taker",
    // },
    // {
    // title: "Employee Tracker",
    // image: "https://i.imgur.com/8BjZjZ4.png",
    // deployedLink: "https://github.com/voi-jankowski/employee-tracker",
    // githubLink: "https://github.com/voi-jankowski/employee-tracker",
    // },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
