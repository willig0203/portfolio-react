import React from "react";
import headerImage from "../../assets/images/header/614-2000x100.jpg";
import headerlogo from "../../assets/images/header/Logo01f.jpeg";
import headshot from "../../assets/images/header/GaryPicHead.JPG";

function Header() {
  return (
    <header className="flex-row space-between">
      <img
        src={headshot}
        className="my-2"
        style={{ maxWidth: 101, maxHeight: 101 }}
        alt="headshot"
      />
      <h1 className="mx-2" id="about">
        Gary Williams
      </h1>
      <img
        src={headerlogo}
        className="my-2"
        style={{ maxWidth: 95, maxHeight: 95 }}
        alt="headerlogo"
      />
      <img
        src={headerImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="headerimage"
      />
    </header>
  );
}

export default Header;
