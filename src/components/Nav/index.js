import React from "react";
// import classNames from "classnames";

function Nav(props) {
  const { categories = [], setCurrentCategory } = props;

  //   const clsName = classNames("mx-2", "nav", "navActive");

  return (
    <header>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li className={`mx-2 ${"navActive"}`} key={category.name}>
              <span
                onClick={(e) => {
                  setCurrentCategory(category);
                  e.target.classList.toggle("navActive");
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
