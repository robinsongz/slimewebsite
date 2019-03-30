import React, { Component } from 'react';
import './index.scss';

class Reminders extends Component {

  render() {

    return (
    <div className="reminders view-comp">

      <h2 className='view-comp__title'>
        Setting up reminders
      </h2>

      <div className='view-comp__section'>
        <h3 className='view-comp__section--title'>
          Expedition Reminders
        </h3>

       
        <div className="view-comp__section--note">
          Setting expedition reminders to go to a channel called 'expeditions' 
        </div>
        <div className='view-comp__section--img'>
          <img alt='expoChannel example' src={require('../Pictures/expochannel example.png')} />
        </div>
      </div>
        
      <div className='view-comp__section'>
        <h3 className='view-comp__section--title'>
            Guild Fort Reminders
        </h3>
        
     
        <div className="view-comp__section--note">
          Changing guild fort reminder message
        </div>

        <div className='view-comp__section--img'>
          <img alt='keys' src={require('../Pictures/guild fort example.png')}/>
        </div>   
      </div>


      <div className="view-comp__section">
        <h3 className='view-comp__section--title'>
            Banquet Reminders
        </h3>

         
        <div className="view-comp__section--note">Changing banquet reminder time. </div>
        <div className="view-comp__section--note">banquetTime is formatted by [minute][hour] in server time </div>
        <div className="view-comp__section--note">00 19 = 7:00pm server time</div>
          
        <div className="view-comp__section--img">
          <img alt='keys' src={require('../Pictures/banquetTime example.png')} />
        </div>
      </div>
    </div>

    )
  }
}

export default Reminders;