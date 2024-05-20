import {Container, Text, Center, Stack, Heading, Box, SimpleGrid, Icon, Image} from '@chakra-ui/react'
import { DiPython, DiJava, DiReact, DiCss3, DiPhp, DiLinux} from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { SiJavascript, SiMysql, SiMicrosoftsqlserver , SiCplusplus, SiTwilio} from "react-icons/si";
import { ReactComponent as chakraui } from './images/chakraui.svg';
import { ReactComponent as jupyter } from './images/jupyter.svg';
import { ReactComponent as opencv } from './images/opencv.svg';
import { ReactComponent as numpy } from './images/numpy.svg';
import { ReactComponent as cssfile } from './images/filetype-css.svg';


function About(){

    return(
        <Center height='100vh' className='about-me' >
            <Stack>
            <Container size='lg'>
                <Heading variant='custom' >About Me</Heading>
            </Container>
            <Container size='lg'>
                <Text  fontSize='xl' color='white'>
                I have over 10 years of experience designing the user interface and user experience of dozens of 
                today's top websites and apps. 
                I am passionate about bold but intuitive design, and doing work for companies with social responsibility.
                </Text>
                <Box padding='10' />
                
                <SimpleGrid columns={[2, null, 10]} spacing='40px'>
                <Box height='80px' color='white'><Icon as={DiPython} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={DiJava} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={DiReact} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={TiHtml5} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={cssfile} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={SiJavascript} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={DiPhp} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={SiMysql} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={SiMicrosoftsqlserver} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={SiCplusplus} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={DiLinux} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={chakraui} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={opencv} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={numpy} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={jupyter} boxSize={16}/></Box>
                <Box height='80px' color='white'><Icon as={SiTwilio} boxSize={16}/></Box>
                </SimpleGrid>
               
            </Container>
            </Stack>
            
            </Center> 
    );

}
export default About;