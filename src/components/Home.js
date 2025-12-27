import {  Container,Text, Stack, Box} from '@mui/material'
import "@fontsource/yeseva-one"; 
import "@fontsource/montserrat"; // Defaults to weight 400 
import { Button } from '@mui/material'
import { ChevronDownIcon } from '@mui/material'
import React, { useRef } from 'react'
import { SkipNavLink, SkipNavContent } from '@mui/material'


function Home(){

    return(
        <Container height='100vh' marginBottom={[1,1/2, 1/4,1/8]} marginLeft={[3, 3/2, 3/4, 3/8]}>
            <Stack>
            
                <Heading variant={['mobile',null,'custom']}>Hi, I'm </Heading>
                <Heading variant={['mobile',null,'custom']} color='white'>&#60;&#47;Yienisha Abeyratne&#62;,</Heading>
                    
                <Typography fontSize={['xl','xl','2xl']}  fontWeight='500' color='black' w='100%'>I’m a passionate backend developer</Typography>
                <Typography fontSize={['lg','xl','2xl']} color='white'>Focusing on Java Springboot</Typography>
        
            </Stack>  
        </Container>
    );
}
export default Home;
