import {  Container, Center,Text, HStack, Stack, Heading, Box} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 
import "@fontsource/montserrat"; // Defaults to weight 400 
import { Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React, { useRef } from 'react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'


function Home(){

    return(
        <Center height='100vh' marginBottom={[1,1/2, 1/4,1/8]} marginLeft={[3, 3/2, 3/4, 3/8]}>
            <Stack>
            
                <Heading variant={['mobile',null,'custom']}>Hi, I'm </Heading>
                <Heading variant={['mobile',null,'custom']} color='white'>&#60;&#47;Yienisha Abeyratne&#62;,</Heading>
                    
                <Text fontSize={['xl','xl','2xl']}  fontWeight='500' color='black' w='100%'>I’m a passionate backend developer</Text>
                <Text fontSize={['lg','xl','2xl']} color='white'>Focusing on Java Springboot</Text>
        
            </Stack>  
        </Center> 
    );
}
export default Home;
