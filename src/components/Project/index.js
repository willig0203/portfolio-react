import React, { useState } from "react";
// import Modal from "../Modal";
import moviefinder from "../../assets/images/projects/Movie Finder.jpg";
import taskmasterpro from "../../assets/images/projects/Taskmaster Pro.jpg";
import takeahike from "../../assets/images/projects/homescreenshot.jpg";
import screenshotweb from "../../assets/images/projects/Screenshotweb.jpg";
import passwordgenerator from "../../assets/images/projects/passwordGenerator.jpg";
import pizzhunt from "../../assets/images/projects/pizzahuntweb.jpg";
import whatssoap from "../../assets/images/projects/193481030-75cda666-a76c-4633-8fb3-dd483cbf89e3.png";
import ProjectChild from "../ProjectChild";

const Project = () => {
  const [photos] = useState([
    {
      image: moviefinder,
      name: "Movie Finder",
      category: "mvc",
      description1: "Search for a movie and find any streaming",
      description2: " service that is streaming it.",
      description3: "HTML, CSS, Flex-Box, JavaScript, Tailwind",

      github: "https://github.com/willig0203/Movie-Finder",
      deployed: "https://darioorbita.github.io/Movie-Finder/",
    },
    {
      image: taskmasterpro,
      name: "Taskmaster Pro",
      category: "mvc",
      description1: "Manage tasks between status columns,",
      description2: " Drag and Drop functionality",
      description3: ".",
      github: "https://github.com/willig0203/taskmaster-pro",
      deployed: "https://willig0203.github.io/taskmaster-pro/",
    },
    {
      image: takeahike,
      name: "Take a hike",
      category: "heroku",
      description1: "Users can post their thoughts on all",
      description2: " things about hiking trails.",
      description3:
        "HTML, CSS, Flex-Box, JavaScript, Node.js, Sequelize, Express",
      github: "https://github.com/willig0203/Take-A-Hike",
      deployed: "https://takea-hike.herokuapp.com/",
    },
    {
      image: screenshotweb,
      name: "Portfolio React",
      category: "react",
      description1: "Web app built using React to showcase",
      description2: " development projects.",
      description3: ".",
      github: "https://github.com/willig0203/portfolio-react",
      deployed: "https://willig0203.github.io/portfolio-react/",
    },
    {
      image: passwordgenerator,
      name: "Password Genereator",
      category: ".",
      description1: "Generate a unique password.",
      description2: ".",
      description3: ".",
      github: "https://github.com/willig0203/passwordGenerator",
      deployed: "https://willig0203.github.io/passwordGenerator/",
    },
    {
      image: pizzhunt,
      name: "Pizza Hunt",
      category: ".",
      description1: "Web app to log and discuss pizza recipies",
      description2: ".",
      description3: ".",
      github: "https://github.com/willig0203/pizza-hunt",
      deployed: "https://pizza-hunt-gdw.herokuapp.com/",
    },
    {
      image: whatssoap,
      name: "Whats Soap",
      category: ".",
      description1: "Web app to log and discuss soap recipies",
      description2: ".",
      description3: ".",
      github: "https://github.com/AlexandertheGreat491/whats_soap",
      deployed: "https://whats-soap.herokuapp.com/ ",
    },
  ]);

  return (
    <section>
      <h2>Portfolio</h2>
      <div className={"mx-2 flex-row space-between"}>
        {photos.map((image) => (
          <ProjectChild {...image}></ProjectChild>
        ))}
      </div>
    </section>
  );
};

export default Project;
