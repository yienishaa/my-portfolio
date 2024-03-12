import { useRef} from 'react';
import {Container, Text, Center, VStack} from '@chakra-ui/react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function About(){
    const main = useRef();

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
            
        }, {scope:main}
    );

    return(
        <Center height='100vh'  ref={main}>
            <VStack>
            <Container size='md'>
                <Text className='head' fontSize='6xl' color='gray.600' >About Me</Text>
            </Container>
            <Container size='md'>
                <Text className='head' fontSize='xl' >
                I have over 10 years of experience designing the user interface and user experience of dozens of 
                today's top websites and apps. 
                I am passionate about bold but intuitive design, and doing work for companies with social responsibility.
                </Text>
            </Container>
            </VStack>
            </Center> 
    );

}
export default About;