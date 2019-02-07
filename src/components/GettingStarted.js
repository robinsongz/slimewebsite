import React, { Component } from 'react';
import { Box, Image, Heading, Card, Text} from 'gestalt';
import './App.css';

class GettingStarted extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.handleMouseEnter = this._handleMouseEnter.bind(this);
    this.handleMouseLeave = this._handleMouseLeave.bind(this);
  }
  _handleMouseEnter() {
    this.setState(() => ({ hovered: true }));
  }
  _handleMouseLeave() {
    this.setState(() => ({ hovered: false }));
  }

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
        
        <Heading size='xs'>
        Give yourself the role of 'GM' to start setting configs.
        </Heading>
        <br />
       
        <Card
            image={
              <Box height={300} width={300}>
              <Image
                fit='contain'
                alt='gmrole'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/gmrole.png')}
                /> 
              </Box> 
            }
            >
        </Card>
        <hr width='50%'/>

        <Heading size='xs'>
        Type !showconf to view your current configs. These are the default configs -
        </Heading>
        <br />
        <Card
            image={
              <Box height={500} width={500}>
              <Image
                fit='contain'
                alt='configuration'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/showconf.png')}
                /> 
              </Box> 
            }
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            >
        </Card>
          <br />
        <Text bold>*banquetTime is formatted by [minute][hour] in server time, so 00 18 = 6pm server time. Keep this in mind when setting your own banquetTime!</Text>
        <br />
        <hr width='50%'/>
        <Heading size='xs'>
        Configuration Help
        </Heading>
            <br />
        <Card
            image={
              <Box height={500} width={700}>
              <Image
                fit='cover'
                alt='keys'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/config tutorial.png')}
                /> 
              </Box> 
            }
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            >
        </Card>
        <hr width='50%'/>

        <Heading size='xs'>
        What each configuration means
        </Heading>
            <br />
        <Card
            image={
              <Box height={320} width={700}>
              <Image
                fit='contain'
                alt='keys'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/keys.png')}
                /> 
              </Box> 
            }
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            >
        </Card>
        <hr width='50%'/>

        <Heading size='sm'>
        EXAMPLES 
        </Heading>
            <br />
        <Card
            image={
              <Box height={320} width={700}>
              <Image
                fit='contain'
                alt='keys'
                naturalHeight={1}
                naturalWidth={1}
                
                src={require('./Pictures/expochannel example.png')}
                /> 
              </Box> 
            }
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            >
            <Box display='flex' justifyContent='center' alignItems='center'>
            <Text bold>If you want expedition reminders to send to a channel called 'expeditions'</Text>
            </Box>
        </Card>
            <br />
            <hr width='25%'/>
        <Card
            image={
              <Box height={320} width={700}>
              <Image
                fit='contain'
                alt='keys'
                naturalHeight={1}
                naturalWidth={1}
                
                src={require('./Pictures/guild fort example.png')}
                /> 
              </Box> 
            }
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            >
            <Box display='flex' justifyContent='center' alignItems='center'>
            <Text bold>Changing guild fort reminder message</Text>
            </Box>
        </Card>
        <br />
        <hr width='25%' />

        <Card
            image={
              <Box height={320} width={700}>
              <Image
                fit='contain'
                alt='keys'
                naturalHeight={1}
                naturalWidth={1}
                
                src={require('./Pictures/banquetTime example.png')}
                /> 
              </Box> 
            }
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            >
          <Box display='flex' justifyContent='center' alignItems='center' direction='column'>
            <Text bold>Changing banquet reminder time. </Text> 
            <Text bold>banquetTime is formatted by [minute][hour] in server time, so 00 19 = 7pm server time. </Text>
            </Box>
        </Card>
        
        <hr width='50%'/>

    </Box>
        
    
    )
  }
}

export default GettingStarted;
