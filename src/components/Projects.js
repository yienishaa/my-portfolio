import { useRef} from 'react';
import {  Container, VStack, Center,Text, Stack, Image, Box} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import img1 from './scotia.jpg'


gsap.registerPlugin(useGSAP, ScrollTrigger);

function Projects(){

    const project = useRef();

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
            
        }, {scope:project}
    );


    return(
        <Container size='lg' h='120vh'>
        <Center >
            <Container  size='lg' ref={project}>
                <Text fontFamily='Yeseva One' fontSize='5xl' >Projects</Text>
                
                <Stack direction={['column', 'row']}>
                    <VStack>
                        <Box bgGradient='linear(to-br,  gray.600 40%, pink.600 60%)' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Text  color='white'  >E-Commerce Website</Text>
                            </Box>
                        </Box>
                    </VStack>
                    <VStack>
                        <Box bgGradient='linear(to-b,  gray.600 40%, pink.600 60%)' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Text  color='white'  >Bill-Shock Preventer</Text>
                            </Box>
                        </Box>
                    </VStack>
                    <VStack>
                        <Box bgGradient='linear(to-bl,  gray.600 40%, pink.600 60%)' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Text  color='white'  >Lost-Roamer Heat Map</Text>
                            </Box>
                        </Box>
                    </VStack>
                </Stack>
            </Container>
        </Center>
        </Container>

    );
}
export default Projects;