import React, { useState } from "react";
import Header from "./components/Header";
import Contact from "./components/Contact";
import "./App.css";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";

function App() {
  const [categories] = useState([
    { name: "About Me", description: "aboutme" },
    { name: "Portfolio", description: "portfolio" },
    { name: "Contact", description: "contact" },
    {
      name: "Resume",
      description: "resume",
    },
  ]);

  // default about me
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div className="App">
      <header className="App-header">
        <>
          <Header></Header>
          <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
          ></Nav>

          {currentCategory.name === "About Me" ? (
            <About></About>
          ) : (
            console.log("notabout")
          )}

          {currentCategory.name === "Portfolio" ? (
            <Project></Project>
          ) : (
            console.log("notportfolio")
          )}

          {currentCategory.name === "Contact" ? (
            <Contact></Contact>
          ) : (
            console.log("notcontact")
          )}

          {currentCategory.name === "Resume" ? (
            <Resume></Resume>
          ) : (
            console.log("notResume")
          )}

          <Footer></Footer>
        </>
      </header>
    </div>
  );
}

export default App;
