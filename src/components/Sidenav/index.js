import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const SideNav = () => (
    <div className="sidenav">
        <NavLink to="/documentation/gettingstarted" activeClassName="sidenav-active">
          <div className="sidenav-link">
            <span className="label">Getting Started</span>
            <img alt="configuration" src={require('../Pictures/preferences_settings_tools-512.png')} />
          </div>
        </NavLink>
        <NavLink to="/documentation/expedition" activeClassName="sidenav-active">
          <div className="sidenav-link">
            <span className="label">Expedition</span>
            <img alt="expedition" src={require('../Pictures/zakum.png')} />
          </div>
        </NavLink>
        <NavLink to="/documentation/forge" activeClassName="sidenav-active">
          <div className="sidenav-link">
            <span className="label">Forge</span>
            <img alt="forge" src={require('../Pictures/jbossforge_icon_256px.png')} />
          </div>
        </NavLink>
    </div>

)

export default SideNav;
