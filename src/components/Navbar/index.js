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
            <div className="nav-link nav-link__reminders">reminders</div>
          </NavLink>
          <NavLink
            to="/documentation/data"> 
            <div className="nav-link nav-link__data">data</div>
          </NavLink>
          <NavLink
            to="/documentation/gettingstarted">
            <div className="nav-link nav-link__getstarted">Get Started</div>
          </NavLink>
        </div>

        <div className='mobile-nav'>

            <button 
              className='mobile-nav__icon--bars' 
              onClick={this.navToggle}>
              <FontAwesomeIcon icon='bars' />
            </button>
          <div className={navToggle ? 'show mobile-nav__content' : 'collapse mobile-nav__content'}>

            <button 
              className='mobile-nav__icon--x' 
              onClick={this.navToggle}>
              <FontAwesomeIcon icon='times' />
            </button>
            <div className='mobile-nav__links'>
              <NavLink
                to="/documentation/expedition"
                onClick={this.navToggle}>
                <div className="mobile-nav__link mobile-nav__link--exped">expedition</div>
              </NavLink>
              <NavLink
                to="/documentation/reminders"
                onClick={this.navToggle}> 
                <div className="mobile-nav__link mobile-nav__link--reminders">reminders</div>
              </NavLink>
              <NavLink
                to="/documentation/data"
                onClick={this.navToggle}> 
                <div className="mobile-nav__link mobile-nav__link--data">data</div>
              </NavLink>
              <NavLink
                to="/documentation/gettingstarted"
                onClick={this.navToggle}>
                <div className="mobile-nav__link mobile-nav__link--getstarted">Getting Started</div>
              </NavLink>
            </div>
            
          </div>
        </div>
      </div>
    )
  }
  

}

export default Navbar;