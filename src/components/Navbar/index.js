import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';


const Navbar = () => {
  return (
    <div className="navbar-comp">
      <div className="main-link">
        <NavLink to='/'>
          <h4>slimeBot</h4>
        </NavLink>
      </div>
      <div className="navbar-links">
        <NavLink
          to='/gettingstarted'
          activeClassName="active-link">
          <div className="nav-link">GETTING STARTED</div>
        </NavLink>
        <NavLink
          to='/commands'
          activeClassName="active-link">
          <div className="nav-link">COMMANDS</div>
        </NavLink>
      </div>
    </div>
  )

}

export default Navbar;