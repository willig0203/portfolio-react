import React, { useState } from "react";
// import Modal from "../Modal";
import moviefinder from "../../assets/images/projects/Movie Finder.jpg";
import taskmasterpro from "../../assets/images/projects/Taskmaster Pro.jpg";
import takeahike from "../../assets/images/projects/homescreenshot.jpg";
import screenshotweb from "../../assets/images/projects/Screenshotweb.jpg";
import passwordgenerator from "../../assets/images/projects/passwordGenerator.jpg";
import pizzhunt from "../../assets/images/projects/pizzahuntweb.jpg";
import ProjectChild from "../ProjectChild";

const Project = () => {
  const [photos] = useState([
    {
      image: moviefinder,
      name: "Movie Finder",
      category: "mvc",
      description:
        "This web application allows anyone to search for a movie and find any streaming services that is currently streaming it.",
      github: "https://github.com/willig0203/Movie-Finder",
      deployed: "https://darioorbita.github.io/Movie-Finder/",
    },
    {
      image: taskmasterpro,
      name: "Taskmaster Pro",
      category: "mvc",
      description:
        "Manage tasks between four status columns: ToDo, In Progress, In Review, Done, Drag and Drop functionality",
      github: "https://github.com/willig0203/taskmaster-pro",
      deployed: "https://willig0203.github.io/taskmaster-pro/",
    },
    {
      image: takeahike,
      name: "Take a hike",
      category: "heroku",
      description:
        "This is a web application for users to post their thoughts on all things about hiking trails.",
      github: "https://github.com/willig0203/Take-A-Hike",
      deployed: "https://takea-hike.herokuapp.com/",
    },
    {
      image: screenshotweb,
      name: "Portfolio React",
      category: "react",
      description:
        "This is a web application built using React to showcase my development projects, and deployed using github pages.",
      github: "https://github.com/willig0203/portfolio-react",
      deployed: "https://willig0203.github.io/portfolio-react/",
    },
    {
      image: passwordgenerator,
      name: "Password Genereator",
      category: ".",
      description:
        "Generate a unique password based on the following options, Lowercase Letters, Uppercase Letters, Numbers, Special Characters, Password Length can be between 8 and 128",
      github: "https://github.com/willig0203/passwordGenerator",
      deployed: "https://willig0203.github.io/passwordGenerator/",
    },
    {
      image: pizzhunt,
      name: "Pizza Hunt",
      category: ".",
      description: "web app to log and discuss pizza recipies",
      github: "https://github.com/willig0203/pizza-hunt",
      deployed: "https://pizza-hunt-gdw.herokuapp.com/",
    },
  ]);

  return (
    <section>
      <h1>Portfolio</h1>
      <div className={"mx-2 flex-row space-between"}>
        {photos.map((image) => (
          <ProjectChild {...image}></ProjectChild>
        ))}
      </div>
    </section>
  );
};

export default Project;
