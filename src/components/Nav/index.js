import React from "react";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentEvent,
    setCurrentEvent,
  } = props;

  return (
    <header>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li className="mx-2" key={category.name}>
              <span
                className="mx-2"
                onClick={(e) => {
                  setCurrentCategory(category);
                  setCurrentEvent(e.target);
                  e.target.classList.toggle("navActive");
                  currentEvent.classList.toggle("navActive");
                }}
              >
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
