import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Navbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        navToggle: false,
      }
    }

    navToggle = () => {
      this.setState({ navToggle: !this.state.navToggle })
    }

  render() {
    const navToggle = this.state.navToggle;

    return (
      <div className="navbar-comp">
        <div className="main-link">
          <NavLink to="/">
            <h4>Slime Bot</h4>
          </NavLink>
        </div>
        <div className="navbar-links">
        <NavLink
            to="/documentation/expedition">
            <div className="nav-link nav-link__exped">expedition</div>
          </NavLink>
          <NavLink
            to="/documentation/reminders"> 
            <div className="nav-link nav-link__forge">reminders</div>
          </NavLink>
          <NavLink
            to="/documentation/forge"> 
            <div className="nav-link nav-link__forge">data</div>
          </NavLink>
          <NavLink
            to="/documentation/gettingstarted">
            <div className="nav-link nav-link__getstarted">Get Started</div>
          </NavLink>
        </div>

        <div className='mobile-nav'>

            <button 
              className='mobile-icon' 
              onClick={this.navToggle}>
              <FontAwesomeIcon icon='bars' />
            </button>
          <div className={navToggle ? 'show' : 'collapse'}>
            <div className='mobile-navbar-links'>
              <NavLink
                to="/documentation/expedition">
                <div className="mobile-nav-link mobile-nav-link__exped">expedition</div>
              </NavLink>
              <NavLink
                to="/documentation/reminders"> 
                <div className="mobile-nav-link mobile-nav-link__forge">reminders</div>
              </NavLink>
              <NavLink
                to="/documentation/forge"> 
                <div className="mobile-nav-link mobile-nav-link__forge">data</div>
              </NavLink>
              <NavLink
                to="/documentation/gettingstarted">
                <div className="mobile-nav-link mobile-nav-link__getstarted">Get Started</div>
              </NavLink>
          </div>
          </div>
        </div>
      </div>
    )
  }
  

}

export default Navbar;