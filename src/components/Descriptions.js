
import {  Container, VStack, Center,Text, Stack, Image, Box, Heading} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 

import img1 from './scotia.jpg'

import React, { useState } from 'react';



function Descriptions(){

    const [overview, setOverview] = useState();

    function displayText(){
        setOverview('sssssssss')
    }


    return(
        <Container size='lg' h='120vh'>
        <Center >
            <Container  size='lg' >
                <Heading variant='custom'>Experience</Heading>
                <Stack direction={['column', 'row']}>
                    <VStack>
                        <Text color='gray.800'>Scotiabank</Text>
                        <Box bgGradient='linear(to-br,  gray.500 , brand.100 )' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Text  color='white'  >Software Engineer - Intern</Text>
                                <p>Boolean state: {overview}</p>
                                <button onClick={() =>{
                                    displayText();
                                }}>Click me to toggle the boolean value
                                </button>
                            </Box>
                        </Box>
                    </VStack>
                    <VStack>
                        <Text color='gray.800'>23e2 Digital Marketing</Text>
                        <Box bgGradient='linear(to-b,  gray.500 , brand.100 )' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Text  color='white'  >Full Stack Developer</Text>
                            </Box>
                        </Box>
                    </VStack>
                    <VStack>
                        <Text color='gray.800'>Etisalat Lanka Pvt. Ltd</Text>
                        <Box bgGradient='linear(to-bl,  gray.500 , brand.100 )' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Text  color='white'  >Core Network Engineer</Text>
                            </Box>
                        </Box>
                    </VStack>
                </Stack>
            </Container>
        </Center>
        </Container>

    );
}
export default Descriptions;