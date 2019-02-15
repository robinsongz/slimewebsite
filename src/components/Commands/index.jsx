import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

class Commands extends Component {
  render() {
    return (

      <div className="commands-comp">

        {/* Configurations */}

        <Link
          to='gettingstarted'>
          <div className="command-link-card">
            <img alt="configuration" src={require('../Pictures/preferences_settings_tools-512.png')} />
            <div className="link-text">Configuration</div>
          </div>
        </Link>

        {/* Expeditions */}
        <Link
          to='expedition'>
          <div className="command-link-card">
            <img alt="expedition" src={require('../Pictures/zakum.png')} />
            <div className="link-text">Expedition</div>
          </div>
        </Link>

        {/* Forge */}
        <Link
          to='forge'>
          <div className="command-link-card">
            <img alt="forge" src={require('../Pictures/jbossforge_icon_256px.png')} />
            <div className="link-text">Forge</div>
          </div>
        </Link>

      </div>
    )
  }
}

export default Commands;
