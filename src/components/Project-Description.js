import {  Container, Grid,GridItem, Icon,Text, Stack, Image, Box, Divider, AbsoluteCenter} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 
import placeholder from './images/placeholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
//const element = <FontAwesomeIcon icon={} />


function ProjectDescription(){
    
    return(
        <Container size='lg' h='100vh'>
            <Text fontSize='4xl' fontFamily='Yeseva One'>E-Commerce Website</Text>
            <Box h='fit-content' boxSize='sm'>
                <Image size='sm' src={placeholder}/>
            </Box>
            <Box position='relative' padding='10'>
                <Divider width='100%' borderWidth='1px'borderColor='brand.300' />
                <AbsoluteCenter bg='brand.300' color='textBrand.100' px='4'>Overview</AbsoluteCenter>
            </Box>
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(10, 1fr)'
                gap={4}>
                
                <GridItem>SKILLS</GridItem>
                <GridItem>
                    <Icon as={PhoneIcon} w={50} h={50}/>
                    
                </GridItem>
                <GridItem>
                    <Icon as={PhoneIcon} w={50} h={50}/>
                </GridItem>
                <GridItem>
                    <Icon as={PhoneIcon} w={50} h={50}/>
                </GridItem>
                <GridItem>
                    <Icon as={PhoneIcon} w={50} h={50}/>
                </GridItem>
                <GridItem rowSpan={2} colSpan={1}>STATUS</GridItem>
                
                    
                
            </Grid>


        </Container>
    );
}
export default ProjectDescription;