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
        <div className="view-comp__section--note">
          Setting day expedition reminder time 
        </div>
        <div className='view-comp__section--img'>
          <img alt='expoChannel example' src={require('../Pictures/expoTime1.png')} />
        </div>

        <div className="view-comp__section--note">
          Setting night expedition reminder time 
        </div>
        <div className='view-comp__section--img'>
          <img alt='expoChannel example' src={require('../Pictures/expoTime2.png')} />
        </div>
      </div>
        
      <div className='view-comp__section'>
        <h3 className='view-comp__section--title'>
            Guild Fort Reminders
        </h3>
        
     
        <div className="view-comp__section--note">
          Setting guild fort reminder message
        </div>

        <div className='view-comp__section--img'>
          <img alt='keys' src={require('../Pictures/guild fort example.png')}/>
        </div>   
        <div className="view-comp__section--note">
          Setting guild fort reminder time
        </div>

        <div className='view-comp__section--img'>
          <img alt='keys' src={require('../Pictures/fortTime.png')}/>
        </div>   
      </div>


      <div className="view-comp__section">
        <h3 className='view-comp__section--title'>
            Banquet Reminders
        </h3>

         
        <div className="view-comp__section--note">Changing banquet reminder time. </div>
          
        <div className="view-comp__section--img">
          <img alt='keys' src={require('../Pictures/banquetTime.png')} />
        </div>
      </div>

      <div className='view-comp__section'>
        <h3 className="view-comp__section--title">
          Changing your region
        </h3>

        <div className="view-comp__section--note">
        Regions: NA, EU, ASIA
        </div>

        <div className="view-comp__section--img">
          <img alt='keys' src={require('../Pictures/region.png')} />
        </div>
      </div>

      <div className='view-comp__section'>
        <h3 className="view-comp__section--title">
          Notes
        </h3>

        <div className="view-comp__section--note">
        Times are all set to Maplestory M's server time.
        </div>

        <div className="view-comp__section--note">
        Times are all set in Military Time. IE 17 00 = 5:00pm
        </div>

        
      </div>
    </div>

    )
  }
}

export default Reminders;