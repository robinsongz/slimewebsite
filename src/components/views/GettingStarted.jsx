import React, { Component } from 'react';
import './index.scss';

class GettingStarted extends Component {

  render() {

    return (
      <div className="getting-started view-comp">

        <h2>
          Setting Configurations
        </h2>

        <div className="description">        
          Give yourself the role of 'GM' to start setting configs.
        </div>
        <div className="picture">
          <img alt='gmrole' src={require('../Pictures/gmrole.png')} />
        </div>

        <h3>
          Type !showconf to view your current configs. These are the default configs -
        </h3>
        <div className="picture">        

          <img alt='configuration' src={require('../Pictures/showconf.png')} />
        </div>



        <h3>
          Configuration Help
        </h3>
        <div className="picture">
          <img alt='config tutorial' src={require('../Pictures/config tutorial.png')} />
        </div>


        <h3>
          What each configuration means
        </h3>
        <div className="picture">        
          <img alt='keys'src={require('../Pictures/keys.png')}/>
        </div>

        <h3>
          EXAMPLES
        </h3>
        <div className="description bold-alert">
          If you want expedition reminders to send to a channel called 'expeditions'
        </div>

        <div className="picture">
          <img alt='expoChannel example' src={require('../Pictures/expochannel example.png')} />
        </div>

        
          
        <div className="description bold-alert">
          Changing guild fort reminder message
        </div>
        <div className="picture">
          <img alt='guild fort example' src={require('../Pictures/guild fort example.png')}/>
        </div>

        <div className="description">
          <div className="bold-alert">Changing banquet reminder time. </div>
          <div className="bold-alert">banquetTime is formatted by [minute][hour] in server time </div>
          <div className="bold-alert">00 19 = 7:00pm server time</div>
        </div>

        <div className="picture">
          <img alt='banquetTime example' src={require('../Pictures/banquetTime example.png')} />
        </div>

          
        <div className=" description bold-alert">
          Changing adminRole from 'GM' to 'Slime Boss'.
        </div>
        
        <div className="picture">
          <img alt='adminRole example' src={require('../Pictures/adminRole example.png')} />
        </div>

          
        <div className=" description bold-alert">
          Now give yourself the role of 'Slime Boss' to use admin commands.
        </div>
        
        <div className="picture">
          <img alt='slime boss example' src={require('../Pictures/slimebossexample.png')} />
        </div>
      </div>


      


    )
  }
}

export default GettingStarted;
