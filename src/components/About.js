import { Container, AbsoluteCenter, CardBody, GridItem, Center,Text,Box, Grid, Image, Heading, HStack} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 
import styled from "styled-components"; 
import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

const StyledText = styled.h1` 
    font-family: "Yeseva One", sans-serif; 
    font-size: 30px; 
`;

const StyledText2 = styled.h1` 
    font-family: "Signika Negative", sans-serif; 
    font-size: 30px; 
`;


function About(){
    return(
        <Grid templateAreas={`"About About"
                            "Button Button"`}
                gridTemplateRows={'80vh 1fr 20vh'}
                gridTemplateColumns={'150px 1fr'}>
            <GridItem area={'About'}>
                <AbsoluteCenter w='90%'>
                <Heading fontFamily='Yeseva One'>
                    <HStack >
                        <Text fontSize='6xl' color='gray.600' >Hi, I'm </Text>
                        <Text fontSize='6xl' >&#60;&#47;Yienisha Abeyratne&#62;</Text>
                    </HStack>
                </Heading>
        
                <Text fontSize='2xl' color='white' w='100%'>a 3rd year CS student at York University.</Text>
    
                <HStack>
                    <Text fontSize='2xl' color='gray.600'>I’m passionate about</Text>
                    <Text fontSize='2xl'>Software Development, </Text>
                </HStack>
        
                <Text fontSize='2xl'>Data Science & Back End Development.</Text>
                </AbsoluteCenter>
            </GridItem>
           
            <GridItem area={'Button'}>
            <Center>
                <Button borderRadius='30' color='gray.600' rightIcon={<ChevronDownIcon />} colorScheme='teal' variant='outline'>MY BEST WORK</Button>
            </Center>   
            </GridItem>
            
        </Grid>
        
    );
}
export default About;