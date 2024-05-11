import { useRef} from 'react';
import {  Container, Center,Text, SimpleGrid, Heading, Button,Card, CardHeader, CardBody, Stack} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 




const titles = ['Scotiabank','Etisalat']

function Projects(){

    const project = useRef();

    

    return(
        <Container size='lg' h='150vh'>
        <Center >
            <Container  size='lg' ref={project}>
                

                <SimpleGrid 
                    columns={2} 
                    spacing={10} 
                    //minChildWidth='100px'
                    >
                    <Text color='textBrand.100' fontFamily='Yeseva One' fontSize='5xl' >Experience</Text>
                    <Text color='textBrand.100' fontFamily='Yeseva One' fontSize='5xl' >Projects</Text>
                    <Button 
                        height='100px'
                        border='2px'
                        borderColor='white.500'
                        borderRadius='10'
                        colorScheme='whiteAlpha' variant='outline'>
                        <Text fontSize='3xl'>Scotiabank</Text>
                    </Button>
                    <Button
                        height='100px'
                        border='2px'
                        borderColor='white.500'
                        borderRadius='10'
                        colorScheme='whiteAlpha' variant='outline'>
                        <Text fontSize='3xl'>Bill Shock Prevention Notifier</Text>
                    </Button>
                    <Button
                        height='100px'
                        border='2px'
                        borderColor='white.500'
                        borderRadius='10'
                        colorScheme='whiteAlpha' variant='outline'>
                            <Text fontSize='3xl'>23e2 Digital</Text>
                    </Button>
                    <Button
                        height='100px'
                        border='2px'
                        borderColor='white.500'
                        borderRadius='10'
                        colorScheme='whiteAlpha' variant='outline'>
                            <Text fontSize='3xl'>SMARTROAM</Text>
                    </Button>
                    <Button
                        height='100px'
                        border='2px'
                        borderColor='white.500'
                        borderRadius='10'
                        colorScheme='whiteAlpha' variant='outline'>
                         <Text fontSize='3xl'>Etisalat</Text>
                    </Button>
                    <Button
                        height='100px'
                        border='2px'
                        borderColor='white.500'
                        borderRadius='10'
                        colorScheme='whiteAlpha' variant='outline'>
                         <Text fontSize='3xl'>Lost Roamer Heatmap</Text>
                    </Button>
                </SimpleGrid>
                
                
            </Container>
        </Center>
        </Container>

    );
}
export default Projects;