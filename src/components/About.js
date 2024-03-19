import {Container, Text, Center, Stack, Heading} from '@chakra-ui/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About(){

    return(
        <Center height='100vh'  >
            <Stack>
            <Container size='md'>
                <Heading variant='custom' >About Me</Heading>
            </Container>
            <Container size='md'>
                <Text  fontSize='xl' >
                I have over 10 years of experience designing the user interface and user experience of dozens of 
                today's top websites and apps. 
                I am passionate about bold but intuitive design, and doing work for companies with social responsibility.
                </Text>
            </Container>
            </Stack>
            </Center> 
    );

}
export default About;