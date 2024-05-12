import {  Container, HStack,Text, Grid, Link, GridItem} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 

import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import resumepdf from '../resume/YienishaAbeyratne_NI.pdf'




function Contact(){

 

    return(
        <Container h='100vh' size='lg' color='textBrand.100'  >
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