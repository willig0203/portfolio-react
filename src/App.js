import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    { name: "About", description: "abo" },
    { name: "Contact", description: "con" },
    { name: "Portfolio", description: "port" },
    {
      name: "Resume",
      description: "res",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <>
          <Header></Header>

          <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
            contactSelected={contactSelected}
            setContactSelected={setContactSelected}
          ></Nav>
        </>
      </header>
    </div>
  );
}

export default App;
