import {Container, Text, Center, Stack, Heading, Box, Grid, Icon, Tooltip, Divider, AbsoluteCenter, SimpleGrid} from '@chakra-ui/react'
import { DiPython, DiJava, DiReact, DiPhp, DiLinux} from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { SiJavascript, SiMysql, SiMicrosoftsqlserver , SiCplusplus, SiTwilio} from "react-icons/si";
import { ReactComponent as node } from "./images/node.svg";
import { ReactComponent as chakraui } from './images/chakraui.svg';
import { ReactComponent as jupyter } from './images/jupyter.svg';
import { ReactComponent as opencv } from './images/opencv.svg';
import { ReactComponent as numpy } from './images/numpy.svg';
import { ReactComponent as cssfile } from './images/filetype-css.svg';

const langs = [    {
    skill: "Linux/Unix",
    brandIcon: DiLinux,
}, {
    skill: "OpenCV",
    brandIcon: opencv,
}, {
    skill: "NumPy",
    brandIcon: numpy,
}, {
    skill: "Jupyter Notebook",
    brandIcon: jupyter,
}, {
    skill: "Twilio",
    brandIcon: SiTwilio,
}]

const databases = [{
    skill: "MySQL",
    brandIcon: SiMysql,
}, {
    skill: "Microsoft SQL Server",
    brandIcon: SiMicrosoftsqlserver,
}]

const backend = [{
    skill: "Python",
    brandIcon: DiPython,
}, {
    skill: "Java",
    brandIcon: DiJava,
}, {
    skill: "C/C++",
    brandIcon: SiCplusplus,
}]

const webLang = [{
    skill: "HTML5",
    brandIcon: TiHtml5,
}, {
    skill: "CSS",
    brandIcon: cssfile,
}, {
    skill: "React",
    brandIcon: DiReact,
},  {
    skill: "Node.js",
    brandIcon: node,
}, {
    skill: "JavaScript",
    brandIcon: SiJavascript,
}, {
    skill: "PHP",
    brandIcon: DiPhp,
}, {
    skill: "Chakra-UI",
    brandIcon: chakraui,
}]

function About(){

    const dbList = databases.map(db => 
        <Box height='80px' color='white'>
            <Tooltip label={db.skill} fontSize='md'>
                <span><Icon as={db.brandIcon} boxSize={16}/></span>
            </Tooltip>
        </Box>
    );

    const miscList = langs.map(misc => 
        <Box height='80px' color='white'>
            <Tooltip label={misc.skill} fontSize='md'>
                <span><Icon as={misc.brandIcon} boxSize={16}/></span>
            </Tooltip>
        </Box>
    );

    const webList = webLang.map(webDevLang => 
        <Box height='80px' color='white'>
            <Tooltip label={webDevLang.skill} fontSize='md'>
                <span><Icon  as={webDevLang.brandIcon} boxSize={16}/></span>
            </Tooltip>
        </Box>
    );

    const backList = backend.map(backendDev => 
        <Box height='80px' color='white'>
            <Tooltip label={backendDev.skill} fontSize='md'>
                <span><Icon as={backendDev.brandIcon} boxSize={16}/></span>
            </Tooltip>
        </Box>
    );

    return(
        <Center height='100vh' className='about-me' >
            <Stack>
            <Container size='lg'>
                <Heading variant={['mobile', 'mobile', 'custom']} >About Me</Heading>
            </Container>
            <Container size='lg'>
                <Text  fontSize={['lg','xl']} color='white'>
                I have over 10 years of experience designing the user interface and user experience of dozens of 
                today's top websites and apps. 
                I am passionate about bold but intuitive design, and doing work for companies with social responsibility.
                </Text>
                <Box padding='10' />
                
                {/*<SimpleGrid columns={[2, null, 10]} spacing='40px'>{langList}</SimpleGrid>*/}
                <SimpleGrid columns={[4, null, 12]} spacing='40px'>
                    {webList}
                    {backList}
                    {dbList}
                    {miscList}
                    
                </SimpleGrid>
                
            </Container>
            </Stack>
            
            </Center> 
    );

}
export default About;