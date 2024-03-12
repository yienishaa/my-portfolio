import { useRef} from 'react';
import {  Container, HStack, Center,Text, Grid, Image, Box} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { FaLinkedin, FaGithub } from "react-icons/fa";




gsap.registerPlugin(useGSAP, ScrollTrigger);

function Contact(){

    const contacts = useRef();

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
            
        }, {scope:contacts}
    );


    return(
        
        <Container h='100vh' size='lg' ref={contacts}>
            
                <Text fontFamily='Yeseva One' fontSize='6xl'>Get In Touch</Text>
                <Box>
                    <Text><EmailIcon/> yienisha.abeyratne@gmail.com</Text>
                    <Text><PhoneIcon/> +1(437)237-3254</Text>
                    <HStack><FaLinkedin/><Text>linkedin.in/yienishaabeyratne</Text></HStack>
                    <HStack><FaGithub/><Text>github.com/yienishaa/</Text></HStack>
                    
                </Box>
        
            
            </Container>
            

    );
}
export default Contact;