import { useRef, useState} from 'react';
import {  Container, Center,Text, SimpleGrid, Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure,
    color} from '@chakra-ui/react'
   
import "@fontsource/yeseva-one"; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProjectDescription from './Project-Description';


  

function Projects(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    

    return(
        <Container size='lg' h='100vh'>
        <Center >
            <Container  size='lg' >
                

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
                        colorScheme='whiteAlpha' variant='outline'
                        onClick={onOpen}>
                        <Text fontSize='3xl'>Scotiabank</Text>
                    </Button>

                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                        size='6xl'
                    >
                        <ModalOverlay />
                        <ModalContent>
                            
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                            <ProjectDescription/>
                            </ModalBody>

                            <ModalFooter>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>





                    <Button
                        height='100px'
                        border='2px'
                        borderColor='white.500'
                        borderRadius='10'
                        colorScheme='whiteAlpha' variant='outline'
                        onClick={onOpen}>
                        <Text fontSize='3xl'>Bill Shock Prevention Notifier</Text>
                    </Button>
                    <Modal
                        initialFocusRef={initialRef}
                        finalFocusRef={finalRef}
                        isOpen={isOpen}
                        onClose={onClose}
                        size='6xl'
                    >
                        <ModalOverlay />
                        <ModalContent>
                            
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                            <ProjectDescription/>
                            </ModalBody>

                            <ModalFooter>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>



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