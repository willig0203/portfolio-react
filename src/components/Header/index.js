import React from "react";
import headerImage from "../../assets/images/header/614-2000x100.jpg";
import headerlogo from "../../assets/images/header/Logo01f.jpeg";
import headshot from "../../assets/images/header/GaryPicHead.JPG";

function Header() {
  return (
    <div className="flex-row">
      <img
        src={headshot}
        className="my-2"
        style={{ width: "25%" }}
        alt="headshot"
      />
      <h1 className="mx-2" id="about">
        Gary Williams
      </h1>
      <img
        src={headerlogo}
        className="my-2"
        style={{ width: "25%" }}
        alt="headerlogo"
      />
      <img
        src={headerImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="headerimage"
      />
    </div>
  );
}

export default Header;
