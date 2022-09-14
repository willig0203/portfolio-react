import React from "react";

const ProjectChild = (image) => {
  return (
    <>
      <div className="flex-col">
        <div>
          <h5>{image.name}</h5>
          <a
            className={"mx-2 nav navActive"}
            href={image.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repo
          </a>

          <a
            className={"mx-2 nav navActive"}
            href={image.deployed}
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployed App
          </a>
        </div>

        <img
          style={{
            height: 300,
            // flex: 1,
            width: null,
            aspectRatio: 1,
          }}
          src={image.image}
          alt={image.name}
          className="img-thumbnail mx-2"
          key={image.name}
        />
      </div>
    </>
  );
};

export default ProjectChild;
