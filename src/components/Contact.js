import {  Container,Text, Grid, Link, SimpleGrid, Stack, Box} from '@mui/material'
import "@fontsource/yeseva-one";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { FaLinkedin, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import resumepdf from '../resume/YienishaAbeyratne_NI.pdf'




function Contact(){

 

    return(
        <Container h='100vh' size={['sm','md','lg']} color='textBrand.100'  >
            <Typography   fontFamily='Yeseva One' fontSize='6xl'>Get In Touch</Typography>
            <Grid columns={[1, null, 2]} spacing={10}>
            <Stack direction={['column', 'column']} spacing='24px'>
                <Box>
                    <Typography><EmailOutlinedIcon/> yienisha.abeyratne@gmail.com</Typography>
                </Box>
                <Box>
                    <Link href='https://www.linkedin.com/in/yienisha/' isExternal>
                        <Stack>
                            <FaLinkedin/>
                            <Typography>linkedin.com/in/yienisha/</Typography>
                        </Stack>
                    </Link>
                </Box>
                <Box>
                    <Link href='https://github.com/yienishaa/' isExternal>
                        <Stack>
                            <FaGithub/>
                            <Typography>github.com/yienishaa</Typography>
                        </Stack>
                    </Link>
                </Box>     
                <Box>
                    <Link href={resumepdf} isExternal>
                        <Stack>
                            <FaExternalLinkAlt/><Typography>Resume</Typography>
                        </Stack>
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
            </Grid>
        </Container>
       
            

    );
}
export default Contact;