import React from "react";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    // currentCategory,
    // contactSelected,
    // setContactSelected,
  } = props;
  return (
    <header>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li className="mx-2" key={category.name}>
              <span
                onClick={() => {
                  setCurrentCategory(category);
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
