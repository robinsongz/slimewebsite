import React, { Component } from 'react';
import './index.scss';

class Expedition extends Component {

  render() {

    return (
      
      <div className="expedition view-comp">

        <h2 className='view-comp__title'>
          Organizing Expeditions
        </h2>

        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            Setting your checkInChannel config
          </h3>
          <div className="view-comp__section--note">
            *important*: !team command will only be available in this channel
          </div>
          <div className='view-comp__section--img'>
            <img alt="checkInChannel" src={require('../Pictures/check in channel example.png')} />
          </div>
        </div>


        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            Checking in to teams
          </h3>
          <div className="view-comp__section--img">        
            <img alt='gmrole' src={require('../Pictures/checkin example.png')} />
          </div>
        </div>

        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            Checking out of a team
          </h3>
          <div className="view-comp__section--img">
            <img alt='checkout' src={require('../Pictures/checkout example.png')} />
          </div>
        </div>


        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            View all current teams
          </h3>
          <div className="view-comp__section--img">
            <img alt='team view all' src={require('../Pictures/team view all example.png')} />
          </div>
        </div>


        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            Editing team's names (admin only)
          </h3>
          <div className="view-comp__section--img">
            
            <img alt='team name change' src={require('../Pictures/changing team names example.png')} />
          </div>
        </div>

        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            Add members manually to team (admin only)
          </h3>
          <div className="view-comp__section--img">
            <img alt='team add' src={require('../Pictures/team add exmaple.png')} className='img' />
          </div>
        </div>

      <div className='view-comp__section'>
        <h3 className='view-comp__section--title'>
          Mention entire team
        </h3>
        <div className="view-comp__section--img">
          <img alt='team mention' src={require('../Pictures/teamMention.png')} />
        </div>
        <div className="view-comp__section--note">
          <div className="note">For all commands, type !team help</div>
        </div>
      </div>
    </div>


    )
  }
}

export default Expedition;
