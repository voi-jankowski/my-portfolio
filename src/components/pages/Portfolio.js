import React from "react";
import Project from "../Project";
import { Grid, Container } from "semantic-ui-react";

const Portfolio = () => {
  const projects = [
    {
      title: "Marvelites",
      image: "/assets/MarvelitesGIF.gif",
      deployedLink: "https://voi-jankowski.github.io/marvel/",
      githubLink: "https://github.com/voi-jankowski/marvel",
    },
    {
      title: "Social Network Back End",
      image: "/assets/SocialMediaGIF.gif",
      deployedLink: "https://github.com/voi-jankowski/social-network-api",
      githubLink: "https://github.com/voi-jankowski/social-network-api",
    },
    {
      title: "TechTonic Blog",
      image: "/assets/TechTonicGIF.gif",
      deployedLink: "https://safe-sea-90944.herokuapp.com/",
      githubLink: "https://github.com/voi-jankowski/tech-blog",
    },
    {
      title: "E-commerce Back End",
      image: "/assets/E-CommerceGIF.gif",
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
      image: "/assets/WeatherDashboardGIF.gif",
      deployedLink: "https://voi-jankowski.github.io/weather-dashboard/",
      githubLink: "https://github.com/voi-jankowski/weather-dashboard",
    },
    {
      title: "Work Day Scheduler",
      image: "/assets/DaySchedulerGIF.gif",
      deployedLink: "https://voi-jankowski.github.io/work-day-scheduler/",
      githubLink: "https://github.com/voi-jankowski/work-day-scheduler",
    },
    // {
    //   title: "Password Generator",
    //   image: "/assets/PasswordGeneratorGIF.gif",
    //   deployedLink: "https://voi-jankowski.github.io/password-generator/",
    //   githubLink: "https://github.com/voi-jankowski/password-generator",
    // },
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
    <Container id="portfolio">
      <br />
      <h2>Portfolio</h2>
      <br />
      <Grid stackable columns={3}>
        {projects.map((project, index) => (
          <Grid.Column key={index}>
            <Project
              title={project.title}
              image={project.image}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
            />
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
