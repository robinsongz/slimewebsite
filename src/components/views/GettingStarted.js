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
            What each configuration means
          </h3>
          <div className="view-comp__section--note">     

            <div className="view-comp__section--config">
              <h4> adminRole </h4> 
              <p> : name of role you must have to use admin commands</p>
            </div>

            <div className="view-comp__section--config">   
              <h4> prefix </h4> 
              <p> : command prefix</p>
            </div>

            <div className="view-comp__section--config">   
              <h4> privateMessage </h4> 
              <p> : private message sent to new discord members </p>
            </div>

            <div className="view-comp__section--config">   
              <h4> expoTime1 </h4> 
              <p> : time for daytime expedition reminder to be sent </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> expoTime2 </h4> 
              <p> : time for nighttime expedition reminder to be sent </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> expoChannel </h4> 
              <p> : expedition reminder will be sent to this channel name </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> expoMessage </h4>
              <p> : content of expedition reminder message </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> banquetTime </h4>
              <p> : time for banquet reminder to be sent </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> banquetChannel </h4> 
              <p> : banquet reminder will be sent to this channel name </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> fortTime </h4>
              <p> : time for guild fort reminder to be sent </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> fortChannel </h4> 
              <p> : guild fort reminder will be sent to this channel </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> fortMessage </h4>
              <p> : content of guild fort reminder message </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> teamChannel </h4>
              <p> : !team commands will only work in this channel name </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> gfChannel  </h4> 
              <p> : !gf commands will only work in this channel name </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> team </h4>
               <p> : used for !team command. cannot customize </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> party </h4>
              <p> : used for !party command. cannot customize </p>
            </div>
            <div className="view-comp__section--config">   
              <h4> guildFort </h4>
              <p> : used for !gf command. cannot customize </p>
            </div>
            <div className="view-comp__section--config">  
        
              <h4>
                region 
              </h4> 
              <p>
                 : timezone for reminder times
              </p>
            </div>

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
