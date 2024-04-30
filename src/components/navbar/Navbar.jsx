import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to="/">Counter</NavLink></li>
            <li><NavLink to="/todo">Todo</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar;