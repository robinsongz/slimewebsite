import React, { Component } from 'react';
import { Box, Image, Heading, Card } from 'gestalt';
import { NavLink } from 'react-router-dom';

class Command extends Component {
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
      direction='row'
      justifyContent='center'
      alignItems='center'
      >
    
    
      {/* Configurations */}
      
      <Box 
        width={210} 
        paddingY={4} 
        margin={10} 
        display='flex' 
        justifyContent='center'
        shape='roundedBottom'
        >
        <NavLink 
          to='/configuration'>
          <Card
            image={
              <Box height={250} width={200}>
              <Image
                fit='cover'
                alt='configuration'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/preferences_settings_tools-512.png')}
                /> 
              </Box> 
            }
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}>
            
          <Box display='flex' justifyContent='center'>
          <Heading
            size='xs'
          >Configuration</Heading>
          </Box>
          </Card>
       </NavLink>
     </Box>
     
      {/* Expeditions */}
     <Box 
      width={210} 
      paddingY={4} 
      margin={10} 
      display='flex' 
      justifyContent='center'
      shape='roundedBottom'
      >
      <NavLink to='/expedition'>
       <Card
        image={
          <Box height={250} width={200}>
          <Image
            fit='cover'
            alt='expedition'
            naturalHeight={1}
            naturalWidth={1}
            src={require('./Pictures/zakum.png')}
            /> 
          </Box> 
        }
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        
        <Box display='flex' justifyContent='center'>
          <Heading
            size='xs'
          >
          Expedition
          </Heading>
        </Box>
       </Card>
       </NavLink>
     </Box>

      {/* Forge */}
      <Box 
        width={210} 
        paddingY={4} 
        margin={10} 
        display='flex' 
        justifyContent='center'>
        <NavLink to='/forge'>
       <Card
        image={
        <Box height={250} width={200}>
          <Image
            fit='cover'
            alt='forge'
            naturalHeight={1}
            naturalWidth={1}
            src={require('./Pictures/jbossforge_icon_256px.png')}
            /> 
        </Box> 
        }
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        
        <Box display='flex' justifyContent='center'>
        <Heading size='xs'>Forge</Heading>
        </Box>
       </Card>
       </NavLink>
     </Box>
    </Box>
    )
  }
}

export default Command;
