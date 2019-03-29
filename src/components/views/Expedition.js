import React, { Component } from 'react';
import './index.scss';

class Expedition extends Component {

  render() {

    return (
      
      <div className="expedition view-comp">

        <h2>
          Organizing Expeditions
        </h2>


        <h3>
          setting your checkInChannel config
        </h3>
        <div className="section">
          <div className="note">
            !team command will only be available in this channel
          </div>
          <img alt="checkInChannel" src={require('../Pictures/check in channel example.png')} />
        </div>


        <h3>
          checking in to teams
        </h3>
        <div className="section">        
          
          <img alt='gmrole' src={require('../Pictures/checkin example.png')} />
        </div>


        <h3>
          checking out of a team
        </h3>
        <div className="section">
        
          <img alt='checkout' src={require('../Pictures/checkout example.png')} />
        </div>

        <h3>
          view all current teams
        </h3>
        <div className="section">
          
          <img alt='team view all' src={require('../Pictures/team view all example.png')} />
        </div>

        <h3>
          editing team's names (admin only)
        </h3>
        <div className="section">
          
          <img alt='team name change' src={require('../Pictures/changing team names example.png')} />
        </div>

        <h3>
          add members manually to team (admin only)
        </h3>
        <div className="section">
          
          <img alt='team add' src={require('../Pictures/team add exmaple.png')} />
        </div>

        <h3>
          mention entire team
        </h3>
        <div className="section">
          
          <img alt='team mention' src={require('../Pictures/team mention example.png')} />
        </div>
        <div className="section">
          <div className="note">For all commands, type !team help</div>
        </div>
    </div>


    )
  }
}

export default Expedition;
