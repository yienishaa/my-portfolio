import { useRef} from 'react';
import {  Container, VStack, Center,Text, Stack, Image, Box, Heading} from '@mui/material'
import "@fontsource/yeseva-one"; 


import img1 from './scotia.jpg'




function Experience(){

    const experi = useRef();

    /*useGSAP(
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
    );*/


    return(
        <Container size='lg' h='120vh'>
        <Center >
            <Container  size='lg' ref={experi}>
                <Heading variant='custom'>Experience</Heading>
                
                <Stack direction={['column', 'row']}>
                    <VStack>
                        <Typography color='gray.800'>Scotiabank</Typography>
                        <Box bgGradient='linear(to-br,  gray.500 , brand.100 )' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Typography  color='white'  >Software Engineer - Intern</Typography>
                            </Box>
                        </Box>
                    </VStack>
                    <VStack>
                        <Typography color='gray.800'>23e2 Digital Marketing</Typography>
                        <Box bgGradient='linear(to-b,  gray.500 , brand.100 )' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Typography  color='white'  >Full Stack Developer</Typography>
                            </Box>
                        </Box>
                    </VStack>
                    <VStack>
                        <Typography color='gray.800'>Etisalat Lanka Pvt. Ltd</Typography>
                        <Box bgGradient='linear(to-bl,  gray.500 , brand.100 )' position='relative' >
                            <Image  opacity={0.3} src={img1}  />
                            <Box position='absolute' left='0'  bottom='0'>
                                <Typography  color='white'  >Core Network Engineer</Typography>
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