import {  Container, HStack,Text, Grid, Link, SimpleGrid, Stack, Box} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 

import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import resumepdf from '../resume/YienishaAbeyratne_NI.pdf'




function Contact(){

 

    return(
        <Container h='100vh' size={['sm','md','lg']} color='textBrand.100'  >
            <Text   fontFamily='Yeseva One' fontSize='6xl'>Get In Touch</Text>
            <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <Stack direction={['column', 'column']} spacing='24px'>
                <Box>
                    <Text><EmailIcon/> yienisha.abeyratne@gmail.com</Text>
                </Box>
                <Box>
                    <Link href='https://www.linkedin.com/in/yienisha/' isExternal>
                        <HStack>
                            <FaLinkedin/>
                            <Text>linkedin.com/in/yienisha/</Text>
                        </HStack>
                    </Link>
                </Box>
                <Box>
                    <Link href='https://github.com/yienishaa/' isExternal>
                        <HStack>
                            <FaGithub/>
                            <Text>github.com/yienishaa</Text>
                        </HStack>
                    </Link>
                </Box>     
                <Box>
                    <Link href={resumepdf} isExternal>
                        <HStack>
                            <FaExternalLinkAlt/><Text>Resume</Text>
                        </HStack>
                    </Link>
                </Box>        
            </Stack>
            <Stack direction={['column', 'column']} spacing='24px'>
                <Box>
                    <Link href='#' isExternal>Home</Link>
                </Box>
                <Box>
                    <Link href='#' isExternal>About</Link>
                </Box>
                <Box>
                    <Link href='#' isExternal>Projects</Link>
                </Box>
                <Box>
                    <Link href='#' isExternal>Experience</Link>
                </Box>
            </Stack>
            </SimpleGrid>
        </Container>
       
            

    );
}
export default Contact;