import React from 'react';
import { Box, Text,} from 'gestalt';

const Footer = () => (
    <Box
        display='flex'
        alignItems='center'
        height={50}
        color='pine' 
    >
    <Box 
        padding={3} 
        display='flex' 
        justifyContent='center'
        width='50%'>
   
        <Text size='md' color='white'>
        Copyright 2018 robinsongz
        </Text>
    </Box>
    <Box 
        display='flex'
        justifyContent='center'
        padding={3}
        width='50%'
    >
        <Box padding={3}>
        <a href='https://discord.gg/4D7vQd' target='blank'>
            <Text size='sm' color='white'>
                Discord
            </Text>
        </a>
        </Box>
        <Box padding={3}>
        <a href='https://github.com/robinsongz' target='blank'>
            <Text size='sm' color='white'>Github</Text>
        </a>
        </Box>
    </Box>
</Box>
    
)

export default Footer;