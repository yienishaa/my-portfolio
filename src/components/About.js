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
    label: "Linux",
}, {
    skill: "Twilio",
    brandIcon: SiTwilio,
    label: "Twilio",
}, {
    skill: "MySQL",
    brandIcon: SiMysql,
    label: "MySQL",
}, {
    skill: "Microsoft SQL Server",
    brandIcon: SiMicrosoftsqlserver,
    label: "Microsoft SQL Server"
}, {
    skill: "Python",
    brandIcon: DiPython,
    label: "Python",
}, {
    skill: "Java",
    brandIcon: DiJava,
    label: "Java",
}, {
    skill: "HTML5",
    brandIcon: TiHtml5,
    label: "HTML5",
}, {
    skill: "CSS",
    brandIcon: cssfile,
    label: "CSS",
}, {
    skill: "React",
    brandIcon: DiReact,
    label: "React",
},  {
    skill: "Node.js",
    brandIcon: node,
    label: "Node.js",
}, {
    skill: "JavaScript",
    brandIcon: SiJavascript,
    label: "JavaScript",
}]

function About(){

    const miscList = langs.map(misc =>
        <Box height='80px' color='white'>
          <span><Icon as={misc.brandIcon} boxSize={14}/></span>
          <Text>{misc.label}</Text>
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
                    {miscList}
                </SimpleGrid>
                
            </Container>
            </Stack>
            
            </Center> 
    );

}
export default About;