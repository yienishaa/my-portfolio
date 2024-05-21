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

import ProjectDescription from './Project-Description';

const projects = [{
        id:0,
        name:"E-Commerce Website",
    }, {
        id:1,
        name:"Portfolio Website",
        
    },{
        id:2,
        name:"SMART ROAM",
        
    }, {
        id:3,
        name:"Lost Roamer Heatmap",
        
    }, {
        id:4,
        name:"Bill Shock Prevention Notifier",
       
    }]
  

function Projects(){

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const [clickedButton, setclickedButton] = useState(0)

   function openClick(id){
        onOpen()
        setclickedButton(id)
   }

   const buttonList = projects.map(buttons =>
        <Button 
            id = {buttons.id}
            variant='projectButtons'
            onClick={() => openClick(buttons.id)}>
            <Text fontSize={['lg','xl','3xl']}>{buttons.name}</Text>
        </Button>
  );
 


    return(
       
        <Center h='100vh'>
            <Container  size={['sm','md','lg']} marginTop={[20,20/2, 20/4,20/8]}>
                
            <Text color='textBrand.100' fontFamily='Yeseva One' fontSize={['4xl','5xl','7xl']} >Projects</Text>
                <SimpleGrid columns={[1, null, 2]} spacing={10} 
                    //minChildWidth='100px'
                    >
                    
                    <>{buttonList}</>
                    
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
                        <ProjectDescription id ={clickedButton}/>
                        </ModalBody>

                        <ModalFooter>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                    </Modal>
                </SimpleGrid>
            </Container>
        </Center>
        

    );
}
export default Projects;