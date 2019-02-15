import React from "react";
import { NavLink } from "react-router-dom";

const Portfolio = () => (
  <div>
    <h1>My Work</h1>
    <p>Click to go to my page.</p>
    <NavLink to="/portfolio/1" activeClassName="is-active">
      Item1
    </NavLink>
    <NavLink to="/portfolio/2" activeClassName="is-active">
      Item2
    </NavLink>
  </div>
);
export default Portfolio;
