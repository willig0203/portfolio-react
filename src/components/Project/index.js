import React, { useState } from "react";
// import Modal from "../Modal";
import moviefinder from "../../assets/images/projects/Movie Finder.jpg";
import taskmasterpro from "../../assets/images/projects/Taskmaster Pro.jpg";
import takeahike from "../../assets/images/projects/homescreenshot.jpg";

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
  ]);

  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
    console.log("tgl");
    setCurrentPhoto({ image, index: i });
    setIsModalOpen(!isModalOpen);
    console.log(currentPhoto);
  };

  const openInNewTab = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    // {isModalOpen && (
    //   <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
    // )}
    <div className="flex-row">
      {photos.map((image, i) => (
        <>
          <div className="flex-row">
            <a href={image.github} target="_blank" rel="noopener noreferrer">
              Github Repo
            </a>
            <a href={image.deployed} target="_blank" rel="noopener noreferrer">
              Deployed App
            </a>
          </div>

          <img
            src={image.image}
            alt={image.name}
            className="img-thumbnail mx-2"
            onClick={() => toggleModal(image.image, i)}
            key={image.name}
          />
        </>
      ))}
    </div>
  );
};

export default Project;
