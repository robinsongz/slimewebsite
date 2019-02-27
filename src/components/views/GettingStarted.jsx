import React, { Component } from 'react';
import './index.scss';

class GettingStarted extends Component {

  render() {

    return (
      <div className="getting-started view-comp">

        <h2>
          Setting Configurations
        </h2>

        <h3>
          Give yourself the role of 'GM' to start setting configs.
        </h3>
        <div className="section">        

          <img className="img-small" alt='gmrole' src={require('../Pictures/gmrole.png')} />
        </div>

        <h3>
          Type !showconf to view your current configs. These are the default configs -
        </h3>
        <div className="section">        

          <img alt='configuration' src={require('../Pictures/showconf.png')} />
        </div>



        <h3>
          Configuration Help
        </h3>
        <div className="section">
          <img alt='keys' src={require('../Pictures/config tutorial.png')} />
        </div>


        <h3>
          What each configuration means
        </h3>
        <div className="section">        
          <img alt='keys'src={require('../Pictures/keys.png')}/>
        </div>

        <h3>
          EXAMPLES
        </h3>
        <div className="section">

          <div className="note">If you want expedition reminders to send to a channel called 'expeditions'</div>
          <img alt='expoChannel example' src={require('../Pictures/expochannel example.png')} />

          <div>
            <div className="note">Changing guild fort reminder message</div>
          </div>
          <img alt='keys' src={require('../Pictures/guild fort example.png')}/>

          <div >
            <div className="note">Changing banquet reminder time. </div>
            <div className="note">banquetTime is formatted by [minute][hour] in server time </div>
            <div className="note">00 19 = 7:00pm server time</div>
          </div>
          <img alt='keys' src={require('../Pictures/banquetTime example.png')} />

          <div >
            <div className="note">Changing adminRole from 'GM' to 'Slime Boss'.</div>
          </div>
          <img alt='keys' src={require('../Pictures/adminRole example.png')} />

          <div >
            <div className="note">Now give yourself the role of 'Slime Boss' to use admin commands.</div>
          </div>
          <img className="img-small" alt='keys' src={require('../Pictures/slimebossexample.png')} />
        
        </div>


      </div>


    )
  }
}

export default GettingStarted;
