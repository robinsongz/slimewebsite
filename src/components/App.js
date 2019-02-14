import React, { Component } from 'react';
import { Button } from 'gestalt';
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
        <div>
          <a
            href='https://discordapp.com/oauth2/authorize?client_id=502644283329871872&scope=bot'
            target='blank'
          >
            <Button
              text='Invite Now'
              accessibilityLabel='Invite Bot To Server'
              color='transparent'
              size='lg'
              type='button'
            >
            </Button>
          </a>


        </div>
      </div>

    )
  }
}

export default App;
