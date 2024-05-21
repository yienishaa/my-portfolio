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
                    
                <Text fontSize={['xl','xl','2xl']}  color='textBrand.100' w='100%'>a 3rd year CS student at York University. I’m passionate about</Text>
                <Text fontSize={['lg','xl','2xl']} color='black'>Software Development, </Text>
                <Text fontSize={['lg','xl','2xl']} color='black'>Data Science & Back End Development.</Text>
        
            </Stack>  
        </Center> 
    );
}
export default Home;