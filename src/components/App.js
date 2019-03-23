import React, { Component } from 'react';
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
              <div className='card-title'>
                Organize Expeditions
              </div>
              <div className='card-description'>
                Check-in, check-out, add, remove, swap, mention members to simplify and enhance your expedition experience.
              </div>
            </div>

            <div className='card'>
              
              <div className='card-title'>
                Daily Reminders
              </div>
              <div className='card-description'>
                Daily Expedition and Guild Fort reminders that go off 15 minutes prior. Customize Banquet reminder to whatever time you want.
              </div>
            </div>

            <div className='card'>
              
              <div className='card-title'>
                Data On Command
              </div>
              <div className='card-description'>
                PBA ranges, weapon & armor potentials, fusing costs, treasure pull costs, jewel data, and more just a command away!
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
