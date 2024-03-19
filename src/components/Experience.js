import { useRef} from 'react';
import {  Container, VStack, Center,Text, Stack, Image, Box, Heading} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import img1 from './scotia.jpg'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'


gsap.registerPlugin(useGSAP, ScrollTrigger);

function Experience(){

    const experi = useRef();

    useGSAP(
        () => {
            const texts = gsap.utils.toArray('.head');
            texts.forEach((head) => {
                gsap.to(head, {
                  x: '20%',
                  scrollTrigger: {
                    trigger: head,
                    start: 'bottom right',
                    end: 'top 30%',
                    scrub: true,
                   // markers: true,
                  },
                });
              });
            
        }, {scope:experi}
    );


    return(
        <Container size='lg' h='120vh'>
        <Center >
            <Container  size='lg' ref={experi}>
                <Heading variant='custom'>Experience</Heading>
                
                <Stack direction={['column', 'row']}>
                    <VStack>
                        <Text color='gray.800'>Scotiabank</Text>
                        <Box bgGradient='linear(to-br,  gray.500 , brand.100 )' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Text  color='white'  >Software Engineer - Intern</Text>
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
export default Experience;