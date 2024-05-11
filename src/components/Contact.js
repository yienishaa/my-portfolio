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
            
        }, {scope:contacts}
    );*/

    return(
        <Container size='lg' color='textBrand.100'>
        <Grid color='textBrand.100'
                templateColumns='repeat(2, 1fr)'
                rowGap={5}
                columnGap={10}>
            
            <GridItem colSpan={2}>
                <Text   fontFamily='Yeseva One' fontSize='6xl'>Get In Touch</Text>
            </GridItem>
            
            <GridItem>
                <Text><EmailIcon/> yienisha.abeyratne@gmail.com</Text>
            </GridItem>
            <GridItem>
                    <Link href='#' isExternal>Home</Link>
            </GridItem>
            <GridItem>
                    <Text><PhoneIcon/> +1(437)237-3254</Text>
            </GridItem>
            <GridItem>
                    <Link href='#' isExternal>About</Link>
            </GridItem>
            <GridItem>
                <Link href='https://www.linkedin.com/in/yienisha/' isExternal>
                    <HStack>
                        <FaLinkedin/>
                        <Text>linkedin.com/in/yienisha/</Text>
                    </HStack>
                </Link>
            </GridItem>
            <GridItem>
                    <Link href='#' isExternal>Projects</Link>
            </GridItem>
            <GridItem>
                    <Link href='https://github.com/yienishaa/' isExternal>
                        <HStack>
                            <FaGithub/>
                            <Text>github.com/yienishaa</Text>
                        </HStack>
                    </Link>
                
            </GridItem>
            <GridItem>
                    <Link href='#' isExternal>Experience</Link>
            </GridItem>
            <GridItem>
                    <Link href={resumepdf} isExternal>
                    <HStack>
                        <FaExternalLinkAlt/><Text>Resume</Text>
                        </HStack>
                    </Link>
            </GridItem>
            
            
            
            
            
        </Grid>
        </Container>
       
            

    );
}
export default Contact;