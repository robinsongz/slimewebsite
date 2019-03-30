import React, { Component } from 'react';
import './index.scss';

class GettingStarted extends Component {

  render() {

    return (
      <div className="getting-started view-comp">
       
        
        <h2 className='view-comp__title'>
          Getting Started
        </h2>
       

          <div className='view-comp__section'>
            <h3 className='view-comp__section--title'>
              Give yourself the role of 'GM' to start setting your configurations
            </h3>
            <div className="view-comp__section--img">        
              <img className="view-comp__section--img-small" alt='gmrole' src={require('../Pictures/gmrole.png')} />
            </div>
          </div>

          <div className='view-comp__section'>
            <h3 className='view-comp__section--title'>
              Type !showconf to view your current configs. These are the default configs -
            </h3>
            <div className="view-comp__section--img">        
              <img alt='configuration' src={require('../Pictures/showconf.png')} />
            </div>
          </div>


        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            Configuration Help
          </h3>
          <div className="view-comp__section--img">
            <img alt='keys' src={require('../Pictures/config tutorial.png')} />
          </div>
        </div>

        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            What each configuration means
          </h3>
          <div className="view-comp__section--img">        
            <img alt='keys'src={require('../Pictures/keys.png')}/>
          </div>
        </div>

        <div className='view-comp__section'>
          <h3 className='view-comp__section--title'>
            Changing adminRole config
          </h3>
        
          <div className="view-comp__section--img">
            
            <img 
              alt='keys' 
              src={require('../Pictures/adminRole example.png')} 
              />
          </div>
            
          <div className="view-comp__section--note">
            Now give yourself the role of 'Slime Boss' to use admin commands.
          </div>
          <div className="view-comp__section--img">
            <img className="view-comp__section--img-small" alt='keys' src={require('../Pictures/slimebossexample.png')} />
          </div>
       

        </div>
      </div>


    )
  }
}

export default GettingStarted;
