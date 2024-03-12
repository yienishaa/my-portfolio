import { useRef} from 'react';
import {  Container, GridItem, Center,Text, Grid, Image, Box} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import img1 from './scotia.jpg'


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
        
        <Container h='100vh' size='lg' ref={experi}>
            <Center>
        <Grid templateRows='repeat(2, 1fr)'
                templateColumns='repeat(3, 1fr)'
                gap={5}
                w='100%'
                h='100%'
            >
            <GridItem  rowSpan={1} colSpan={3}>
                <Text fontFamily='Yeseva One' fontSize='6xl' >Experience</Text>
            </GridItem>
            
            <GridItem rowSpan={1} colSpan={1}>
            <Text color='gray.800'>Scotiabank</Text>
                <Box bgGradient='linear(to-br,  gray.600 40%,   pink.600 100% )'>
                    <Image opacity={0.3} src={img1}  />
                    <Text  color='white' transform='translate(2%,-100%)'>Software Engineer - Intern</Text>
                </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
            <Text color='gray.800'>Scotiabank</Text>
                <Box  bgGradient='linear(to-b,  gray.600 40%, pink.600 60%)'>
                    <Image opacity={0.3} src={img1} />
                    <Text color='white' transform='translate(2%,-100%)'>Full Stack Developer</Text>
                </Box>
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
            <Text color='gray.800'>Scotiabank</Text>
                <Box  bgGradient='linear(to-bl, gray.600 40%, pink.600 60%)'>
                    <Image opacity={0.3} src={img1} />
                    <Text  color='white' transform='translate(2%,-100%)'>Core Network Engineer</Text>
                </Box>
            </GridItem>
            
            </Grid>
            </Center>
            </Container>
            

    );
}
export default Experience;