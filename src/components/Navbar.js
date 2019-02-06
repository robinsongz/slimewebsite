import React from 'react';
import { Box, Heading } from 'gestalt';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <Box
        display='flex'
        alignItems='center'
        height={100}
        color='pine'
        justifyContent='between'
        padding={10}  
    >
    <Box>
        <NavLink to='/'>
            <Box
                display='flex'
                alignItems='center'
                >
               
                <Heading size='sm' color='white'>
                    Slime Bot
                </Heading>

               
            </Box>
        </NavLink>
    </Box>
    <Box 
        display='flex'
        direction='row'
    >
        
        <Box
            padding={3}>    
            <Heading size='xs'> 
                <NavLink 
                    to='/gettingstarted'
                    style= {{ color: 'white' }}
                    activeStyle={{ color: '#3CB371'}}>
                    Getting Started
                </NavLink>
            </Heading>     
            </Box>  
        

        
            <Box
                padding={3}>   
               
                <Heading size='xs' color='white'>
                <NavLink 
                    to ='/commands'
                    style= {{ color: 'white'}}
                    activeStyle= {{ color: '#3CB371'}}>
                Commands
                </NavLink> 
                </Heading>
            </Box>  
    </Box>
</Box>
    
)

export default Navbar;