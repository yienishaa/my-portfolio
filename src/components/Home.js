import {  Container, Center,Text, HStack, Stack, Heading} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 
import "@fontsource/montserrat"; // Defaults to weight 400 
import { Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React, { useRef } from 'react'
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'


function Home(){

    
    return(
        
        <Center h='100vh' >
            <Stack direction='column' >
            <Container size={['md', 'lg']} >
            <HStack>
                <Heading variant='custom' noOfLines={1} >Hi, I'm </Heading>
                <Heading variant='custom' color='white'>&#60;&#47;Yienisha Abeyratne&#62;,</Heading>
                </HStack>
            
        
            <Text fontSize={['lg','xl','2xl']}  color='textBrand.100' w='100%'>a 3rd year CS student at York University. I’m passionate about</Text>

            
            <Stack direction={['column', 'row']} >
                    <Text fontSize={['lg','xl','2xl']}  color='black'></Text>
                    <Text fontSize={['lg','xl','2xl']} color='black'>Software Development, </Text>
                    
        
            <Text fontSize={['lg','xl','2xl']} color='black'>Data Science & Back End Development.</Text>
            </Stack>
            
            
            </Container>

            
            
            </Stack>
            </Center> 
    );
}
export default Home;