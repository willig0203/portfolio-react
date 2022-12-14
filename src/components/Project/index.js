import React, { useState } from "react";
// import Modal from "../Modal";
import moviefinder from "../../assets/images/projects/Movie Finder.jpg";
import taskmasterpro from "../../assets/images/projects/Taskmaster Pro.jpg";
import takeahike from "../../assets/images/projects/homescreenshot.jpg";
import screenshotweb from "../../assets/images/projects/Screenshotweb.jpg";
import passwordgenerator from "../../assets/images/projects/passwordGenerator.jpg";
import pizzhunt from "../../assets/images/projects/pizzahuntweb.jpg";
import whatssoap from "../../assets/images/projects/193481030-75cda666-a76c-4633-8fb3-dd483cbf89e3.png";
import notetaker from "../../assets/images/projects/NoteTaker.png";

import ProjectChild from "../ProjectChild";

const Project = () => {
  const [photos] = useState([
    {
      image: moviefinder,
      name: "Movie Finder",
      category: "mvc",
      description1: "Search for a movie and find any",
      description2: "service that is streaming it.",
      description3: "HTML CSS Flex-Box JavaScript",
      description4: "Tailwind FetchAPI",
      github: "https://github.com/willig0203/Movie-Finder",
      deployed: "https://darioorbita.github.io/Movie-Finder/",
    },
    {
      image: taskmasterpro,
      name: "Taskmaster Pro",
      category: "mvc",
      description1: "Manage tasks between status columns,",
      description2: "Drag and Drop functionality",
      description3: "HTML CSS Javascript jQuery jQuery UI Bootstrap",
      description4: "Touch Punch Popper Moment Google Fonts OI-Plus",
      github: "https://github.com/willig0203/taskmaster-pro",
      deployed: "https://willig0203.github.io/taskmaster-pro/",
    },
    {
      image: takeahike,
      name: "Take a hike",
      category: "heroku",
      description1: "Users can post their thoughts on all",
      description2: "things about hiking trails",
      description3: "HTML CSS Flex-Box JavaScript",
      description4: "Node.js Sequelize Express Cloudinary",
      github: "https://github.com/willig0203/Take-A-Hike",
      deployed: "https://takea-hike.herokuapp.com/",
    },
    {
      image: screenshotweb,
      name: "Portfolio React",
      category: "react",
      description1: "Web app built using React to showcase",
      description2: " development projects.",
      description3: "HTML CSS Flex-Box JavaScript Node.js",
      description4: "email-js react react-dom react-scripts",
      github: "https://github.com/willig0203/portfolio-react",
      deployed: "https://willig0203.github.io/portfolio-react/",
    },
    {
      image: passwordgenerator,
      name: "Password Genereator",
      category: ".",
      description1: "Generate a unique password based",
      description2: "on certian criteria",
      description3: "HTML CSS",
      description4: "Javascript",
      github: "https://github.com/willig0203/passwordGenerator",
      deployed: "https://willig0203.github.io/passwordGenerator/",
    },
    {
      image: pizzhunt,
      name: "Pizza Hunt",
      category: ".",
      description1: "Web app to post and discuss pizza recipies",
      description2: "Users have no need to log in at this time",
      description3: "Express MongoDB Mongoose Heroku",
      description4: "HTML CSS MVC Pattern",
      github: "https://github.com/willig0203/pizza-hunt",
      deployed: "https://pizza-hunt-gdw.herokuapp.com/",
    },
    {
      image: whatssoap,
      name: "Whats Soap",
      category: ".",
      description1: "Web app to post and discuss soap recipies",
      description2: "HTML CSS Flex-Box JavaScript Node.js",
      description3: "Apollo Server Bootstrap GraphQL",
      description4: "JWT MongoDB, Mongoose Cloudinary",
      github: "https://github.com/AlexandertheGreat491/whats_soap",
      deployed: "https://whats-soap.herokuapp.com/",
    },
    {
      image: notetaker,
      name: "Note Taker",
      category: ".",
      description1: "Web app to post a List of Notes",
      description2: "HTML CSS JavaScript Node.js",
      description3: "Heroku Express",
      description4: "JSON UUID",
      github: "https://github.com/willig0203/note-taker",
      deployed: "https://note-taker-gdw.herokuapp.com/",
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
