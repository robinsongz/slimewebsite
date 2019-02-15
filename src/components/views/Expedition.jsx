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
          Set your checkInChannel config
        </h3>
        <div className="description">
          !team command will only be available in this channel
         </div> 
        <div className="picture">
          <img alt='checkInChannel example' src={require('../Pictures/check in channel example.png')} />
        </div>


        <h3>
          !team checkin
        </h3>
        <div className="description">        
          check-in to first available team
        </div>  
        <div className="picture">
          <img alt='gmrole' src={require('../Pictures/checkin example.png')} />
        </div>


        <h3>
          !team checkout
        </h3>
        <div className="description">
            check-out from team
        </div>
        <div className="picture">
          <img alt='checkout' src={require('../Pictures/checkout example.png')} />
        </div>

        <h3>
          !team view all
        </h3>
        <div className="description">
          view all teams
        </div>
        <div className="picture">
          <img alt='team view all' src={require('../Pictures/team view all example.png')} />
        </div>

        <h3>
          !team edit team[#] [team title]
        </h3>
        <div className="description">
            changing team #'s title
          </div>
        <div className="picture">
          <img alt='team name change' src={require('../Pictures/changing team names example.png')} />
        </div>

        <h3>
          !team add team[#] [ign]
        </h3>
        <div className="description">
          adding [ign] to team #
        </div>
        <div className="picture">
          <img alt='team add' src={require('../Pictures/team add exmaple.png')} />
        </div>

        <h3>
          !team mention team[#] [message]
        </h3>
        <div className="description">
            sends [message] to everyone on team #
        </div>
        <div className="picture">
          <img alt='team mention' src={require('../Pictures/team mention example.png')} />
        </div>

        <h3>For all commands, type !team help</h3>
    </div>


    )
  }
}

export default Expedition;
