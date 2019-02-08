import React, { Component } from 'react';
import { Box, Image, Heading, Card} from 'gestalt';
import './App.css';

class Forge extends Component {
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
            Forge Commands
            <hr/>
        </Heading>
        <Box display='flex' justifyContent='center' direction='column' alignItems='center'>
        <Heading size='xs'>
         Fusing Cost Calculator
        </Heading>
        <br />
        <Heading size='xs' color='red'>
        !fuse [Fuse Item] [Fuse Material] [Fuse Material Cost]
        </Heading>
        </Box>
        <br />
       
        <Card
            image={
              <Box height={200} width={500}>
              <Image
                fit='contain'
                alt='fusing cost calculator'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/fusing cost calc example.png')}
                /> 
              </Box> 
            }
            >
        </Card>
        <hr width='50%'/>
            <br />
        <Box display='flex' justifyContent='center' direction='column' alignItems='center'>
        <Heading size='xs'>
        Treasure Pulls Fusing Cost
        </Heading>
        <Heading size='xs' color='red'>
        !fuse treasure
        </Heading>
        </Box>
        <br />
       
        <Card
            image={
              <Box height={400} width={400}>
              <Image
                fit='contain'
                alt='treasure pulls'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/treasure example.png')}
                /> 
              </Box> 
            }
            >
        </Card>
        <hr width='50%'/>
        <br />
        <Box display='flex' justifyContent='center' direction='column' alignItems='center'>
        <Heading size='xs'>
        General Fusing Data
        </Heading>
        <Heading size='xs' color='red'>
        !fuse data
        </Heading>
        </Box>
            <br />
       
        <Card
            image={
              <Box height={500} width={500}>
              <Image
                fit='contain'
                alt='fusing data'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/fusing data example.png')}
                /> 
              </Box> 
            }
            >
        </Card>      
        <hr width='50%'/>
        <br />
        <Box display='flex' justifyContent='center' direction='column' alignItems='center'>
        <Heading size='xs'>
        Jewel Data
        </Heading>
        <Heading size='xs' color='red'>
        !jewel [color]
        </Heading>
        </Box>
            <br />
       
        <Card
            image={
              <Box height={500} width={500}>
              <Image
                fit='contain'
                alt='jewel example'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/jewel example.png')}
                /> 
              </Box> 
            }
            >
        </Card>  
        <hr width='50%'/>
        <br />
        <Box display='flex' justifyContent='center' direction='column' alignItems='center'>
        <Heading size='xs'>
        Jewel Set Bonus Data
        </Heading>
        <Heading size='xs' color='red'>
        !jewel [color] setbonus
        </Heading>
        </Box>
            <br />
       
        <Card
            image={
              <Box height={500} width={500}>
              <Image
                fit='contain'
                alt='team add'
                naturalHeight={1}
                naturalWidth={1}
                src={require('./Pictures/jewel setbonus exmaple.png')}
                /> 
              </Box> 
            }
            >
        </Card>     
      
    </Box>
        
    
    )
  }
}

export default Forge;
