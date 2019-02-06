import React, { Component } from 'react';
import { Box, Image, Heading, Button} from 'gestalt';
import './App.css';

class App extends Component {
  render() {
    return (
     <Box 
      id='app'
      display='flex' 
      justifyContent='center' 
      alignItems='center'
      direction='column'
      padding={2}
      >
      <Box
        height={300}
        width={400}>
       <Image
          alt='slime logo'
          naturalHeight={1}
          naturalWidth={1}
          src={require('./Pictures/king_slime_solo.png')} />
      </Box>
      <Box padding={3}>
        <Heading size='sm' color='white'>
          A DISCORD BOT FOR MAPLESTORY M
        </Heading>
      </Box>
        <Box padding={2}>
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
        
       
        </Box>
     </Box>
   
    )
  }
}

export default App;
