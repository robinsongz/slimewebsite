import React, { Component } from 'react';
import { Box, Image, Heading, Card} from 'gestalt';
import './App.css';

class GettingStarted extends Component {
  render() {
    return (
    <Box 
        id='app'
        display='flex'
        alignItems='center'
        direction='column'
        margin={6}
        >
   
        <Heading size='md'>
            Setting Configurations
            <hr/>
        </Heading>
        
        <Heading size='sm'>
        Give yourself the role of 'GM' to start setting configs.
        </Heading>
        <br />
        <Card
            image={
              <Box height={600} width={600}>
              <Image
                fit='contain'
                alt='configuration'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/slimeconf.png')}
                /> 
              </Box> 
            }
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
        
        </Card>
    </Box>
        
    
    )
  }
}

export default GettingStarted;
