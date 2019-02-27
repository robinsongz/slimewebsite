import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';


const Navbar = () => {
  return (
    <div className="navbar-comp">
      <div className="main-link">
        <NavLink to="/">
          <h4>Slime Bot</h4>
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink
          to="/documentation/gettingstarted">
          <div className="nav-link">Get Started</div>
        </NavLink>
      </div>
    </div>
  )

}

export default Navbar;