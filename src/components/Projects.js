import { useRef} from 'react';
import {  Container, VStack, Center,Text, Stack, Image, Box, LinkBox, LinkOverlay} from '@chakra-ui/react'
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
        <Container size='lg' h='150vh'>
        <Center >
            <Container  size='lg' ref={project}>
                <Text color='textBrand.100' fontFamily='Yeseva One' fontSize='5xl' >Projects</Text>
                
                <Stack direction={['column', 'row']} spacing={10}>
                    <VStack >
                    <LinkBox as='article' >
                    <LinkOverlay href='#'>
                        <Box bgGradient='linear(to-br,  brand.500 , brand.400 )' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                            
                                <Text color='textBrand.100' pl='3'>E-Commerce Website</Text>
                               
                            </Box>
                        </Box>
                        </LinkOverlay>
                        </LinkBox>
                    </VStack>
                    <VStack >
                    <LinkBox as='article' >
                    <LinkOverlay href='#'>
                        <Box bgGradient='linear(to-bl,  brand.500 , brand.400 )' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Text  color='textBrand.100' pl='3' >Bill-Shock Preventer</Text>
                            </Box>
                        </Box>
                        </LinkOverlay>
                        </LinkBox>
                    </VStack>
                </Stack>
                <Container size='lg'/>
                <Stack direction={['column', 'row']} spacing={[10]}>
                    <VStack>
                    <LinkBox as='article' >
                    <LinkOverlay href='#'>
                        <Box bgGradient='linear(to-tr,  brand.500 , brand.400 )' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Text  color='textBrand.100' pl='3' >Lost-Roamer Heat Map</Text>
                            </Box>
                        </Box>
                        </LinkOverlay>
                        </LinkBox>
                    </VStack>
                    <VStack>
                    <LinkBox as='article' >
                    <LinkOverlay href='#'>
                        <Box bgGradient='linear(to-tl,  brand.500 , brand.400 )' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Text  color='textBrand.100' pl='3' >Lost-Roamer Heat Map</Text>
                            </Box>
                        </Box>
                        </LinkOverlay>
                        </LinkBox>
                    </VStack>
                </Stack>
            </Container>
        </Center>
        </Container>

    );
}
export default Projects;