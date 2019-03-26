import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <div className="app">
          <div className="slime-img">
            <img
              alt='slime logo'
              src={require('./Pictures/king_slime_solo.png')} />
          </div>
          <div>
            <h1 className="slime-heading">
              A DISCORD BOT FOR MAPLESTORY M
            </h1>
            
          </div>
          <div className='card-container'>
            <div className='card'>
              <div className='card-img'>
                <FontAwesomeIcon icon='users' />
              </div>
              <div className='card-title'>
                Organize Expeditions
              </div>
              <div className='card-description'>
                Simplify and enhance your expedition experience
              </div>
            </div>

            <div className='card'>
              <div className='card-img'>
                <FontAwesomeIcon icon='stopwatch' />
              </div>
              <div className='card-title'>
                Daily Reminders
              </div>
              <div className='card-description'>
                Expedition, guild fort, and banquet reminders
              </div>
            </div>

            <div className='card'>
              <div className='card-img'>
                <FontAwesomeIcon icon='info-circle' />
              </div>
              <div className='card-title'>
                Data On Command
              </div>
              <div className='card-description'>
                PBA ranges, fusing costs, jewel data, & more
              </div>
            </div>
          </div>
          <div className='button-container'>
            <a
              href='https://discordapp.com/oauth2/authorize?client_id=502644283329871872&scope=bot'
              target='blank'
              className="discord-link"
            >
            Invite Bot
            </a>

            <a 
              href='https://discord.gg/DVjQ39K' 
              target='blank'
              className='discord-link'>
               Join Server
            </a>
          </div>

          
        </div>
    )
  }
}

export default App;
