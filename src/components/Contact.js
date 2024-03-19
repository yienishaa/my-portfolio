import { useRef} from 'react';
import {  Container, HStack, Center,Text, Grid, Link, Box, GridItem} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import resumepdf from '../resume/YienishaAbeyratne_NI.pdf'

gsap.registerPlugin(useGSAP, ScrollTrigger);

const links = [
    {
        id: 1,
        displayText: 'yienisha.abeyratne@gmail.com',
        linkTo: 'mailto:yienisha.abeyratne@gmail.com',
    },
    {
        id: 2,
        displayText: '+1(437) 237-3254',
        linkTo: 'callto:+14372373254',
    },
    {
        id: 3,
        displayText: 'LinkedIn',
        linkTo: 'https://www.linkedin.com/in/yienisha-abeyratne/',
    },
    {
        id: 4,
        displayText: 'Github',
        linkTo: 'https://github.com/yienishaa/',
    },
]

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
        <Container size='lg'>
        <Grid templateAreas={`"title bl bl"
                  "title email home"
                  "title phone about"
                  "title linkedin projects"
                  "title github experience"
                  "title resume cc"`} h='200px'>
            
            <GridItem area={'title'} >
                <Center>
                    <Text   fontFamily='Yeseva One' fontSize='6xl'>Get In Touch</Text>
                </Center>
            </GridItem>
            
            <GridItem area={'email'}>
                <Text><EmailIcon/> yienisha.abeyratne@gmail.com</Text>
            </GridItem>
            <GridItem area={'phone'}>
                    <Text><PhoneIcon/> +1(437)237-3254</Text>
            </GridItem>
            <GridItem area={'linkedin'} >
                <Link href='https://www.linkedin.com/in/yienisha-abeyratne/' isExternal>
                    <HStack>
                        <FaLinkedin/>
                        <Text>LinkedIn</Text>
                    </HStack>
                </Link>
            </GridItem>
            <GridItem area={'github'}>
                    <Link href='https://github.com/yienishaa/' isExternal>
                        <HStack>
                            <FaGithub/>
                            <Text>GitHub</Text>
                        </HStack>
                    </Link>
                
            </GridItem>
            <GridItem area={'resume'}>
                    <Link href={resumepdf} isExternal>
                    <HStack>
                        <FaExternalLinkAlt/><Text>Resume</Text>
                        </HStack>
                    </Link>
            </GridItem>
            <GridItem area={'home'}>
                    <Link href='#' isExternal>Home</Link>
            </GridItem>
            <GridItem area={'about'}>
                    <Link href='#' isExternal>About</Link>
            </GridItem>
            <GridItem area={'projects'}>
                    <Link href='#' isExternal>Projects</Link>
            </GridItem>
            <GridItem area={'experience'}>
                    <Link href='#' isExternal>Experience</Link>
            </GridItem>
            
        </Grid>
        </Container>
       
            

    );
}
export default Contact;