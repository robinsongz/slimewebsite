import React, { Component } from 'react';
import './index.scss';

class Reminders extends Component {

  render() {

    return (
      <div className="reminders view-comp">
        <h2>
            Setting up reminders
        </h2>

        <h3>
          Expedition Reminders
        </h3>

        <div className="section">
            <div className="note">Setting expedition reminders to go to a channel called 'expeditions' </div>
            <img alt='expoChannel example' src={require('../Pictures/expochannel example.png')} />
        </div>
        

        <h3>
            Guild Fort Reminders
        </h3>
        
        <div className="section">
            <div className="note">Changing guild fort reminder message</div>
          
            <img alt='keys' src={require('../Pictures/guild fort example.png')}/>
          
        </div>

        <h3>
            Banquet Reminders
        </h3>

          <div >
            <div className="note">Changing banquet reminder time. </div>
            <div className="note">banquetTime is formatted by [minute][hour] in server time </div>
            <div className="note">00 19 = 7:00pm server time</div>
          </div>
          <img alt='keys' src={require('../Pictures/banquetTime example.png')} />
        
        </div>

    )
  }
}

export default Reminders;