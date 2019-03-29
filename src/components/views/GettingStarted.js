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
          Give yourself the role of 'GM' to start setting configs
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
          Changing adminRole config
        </h3>
       
          <div className="section">
          
          <img alt='keys' src={require('../Pictures/adminRole example.png')} />
          </div>
          <div >
            <div className="note">Now give yourself the role of 'Slime Boss' to use admin commands.</div>
          </div>
          <img className="img-small" alt='keys' src={require('../Pictures/slimebossexample.png')} />



      </div>


    )
  }
}

export default GettingStarted;
