import React from "react";
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
          <NavLink to=''>
            <button className="navButton">Home</button>
          </NavLink>

          <NavLink to='/newRecipe'>
          <button className="navButton">Add Recipe</button>
          </NavLink>
      </nav>
    </header>
  );
};

export default Header;
