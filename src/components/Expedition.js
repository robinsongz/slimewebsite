import React, { Component } from 'react';
import { Box, Image, Heading, Card} from 'gestalt';
import './App.css';

class Expedition extends Component {
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
        display='flex'
        alignItems='center'
        direction='column'
        margin={6}
        justifyContent='center'
        >
   
        <Heading size='md'>
            Organizing Expeditions
            <hr/>
        </Heading>
        <Box display='flex' justifyContent='center' direction='column' alignItems='center'>
        <Heading size='xs' color='red'>
        !team checkin 
        </Heading>
        <Heading size='xs'>
        check-in to first available team
        </Heading>
        </Box>
        <br />
       
        <Card
            image={
              <Box height={400} width={400}>
              <Image
                fit='contain'
                alt='gmrole'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/checkin example.png')}
                /> 
              </Box> 
            }
            >
        </Card>
        <hr width='50%'/>
            <br />
        <Box display='flex' justifyContent='center' direction='column' alignItems='center'>
        <Heading size='xs' color='red'>
        !team checkout 
        </Heading>
        <Heading size='xs'>
        check-out from team
        </Heading>
        </Box>
        <br />
       
        <Card
            image={
              <Box height={400} width={400}>
              <Image
                fit='contain'
                alt='checkout'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/checkout example.png')}
                /> 
              </Box> 
            }
            >
        </Card>
        <hr width='50%'/>
        <br />
        <Box display='flex' justifyContent='center' direction='column' alignItems='center'>
        <Heading size='xs' color='red'>
        !team view all
        </Heading>
        <Heading size='xs'>
        view all teams
        </Heading>
        </Box>
            <br />
       
        <Card
            image={
              <Box height={500} width={500}>
              <Image
                fit='contain'
                alt='team view all'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/team view all example.png')}
                /> 
              </Box> 
            }
            >
        </Card>      
        <hr width='50%'/>
        <br />
        <Box display='flex' justifyContent='center' direction='column' alignItems='center'>
        <Heading size='xs' color='red'>
        !team edit team[#] [team title]
        </Heading>
        <Heading size='xs'>
        changing team #'s title
        </Heading>
        </Box>
            <br />
       
        <Card
            image={
              <Box height={200} width={400}>
              <Image
                fit='contain'
                alt='team name change'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/changing team names example.png')}
                /> 
              </Box> 
            }
            >
        </Card>  
        <hr width='50%'/>
        <br />
        <Box display='flex' justifyContent='center' direction='column' alignItems='center'>
        <Heading size='xs' color='red'>
        !team add team[#] [ign]
        </Heading>
        <Heading size='xs'>
        adding [ign] to team #
        </Heading>
        </Box>
            <br />
       
        <Card
            image={
              <Box height={400} width={400}>
              <Image
                fit='contain'
                alt='team add'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/team add exmaple.png')}
                /> 
              </Box> 
            }
            >
        </Card>     
        <hr width='50%'/>
        <br />
        <Box display='flex' justifyContent='center' direction='column' alignItems='center'>
        <Heading size='xs' color='red'>
        !team mention team[#] [message]
        </Heading>
        <Heading size='xs'>
        sends [message] to everyone on team #
        </Heading>
        </Box>
            <br />
       
        <Card
            image={
              <Box height={200} width={400}>
              <Image
                fit='contain'
                alt='team mention'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/team mention example.png')}
                /> 
              </Box> 
            }
            >
        </Card>     
        <hr width='50%'/>
        <br />
        <Heading>For all commands, type !team help</Heading>
    </Box>
        
    
    )
  }
}

export default Expedition;
