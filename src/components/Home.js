import {  Container, GridItem, Center,Text, Grid, Heading, Stack} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 
import { Button } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Show, Hide } from '@chakra-ui/react'



function Home(){

    
    return(
        
        <Center h='100vh'>
            <Container size={['md', 'lg']} >
            
                <Text fontFamily='Yeseva One' fontSize='6xl' color='gray.600' >Hi, I'm </Text>
                <Text fontFamily='Yeseva One' fontSize='6xl' >&#60;&#47;Yienisha Abeyratne&#62;</Text>
            
            
        
            <Text fontSize={['lg','xl','2xl']} color='white' w='100%'>a 3rd year CS student at York University.</Text>

            
            <Stack direction={['column', 'row']} >
                    <Text fontSize={['lg','xl','2xl']}  color='gray.600'>I’m passionate about</Text>
                    <Text fontSize={['lg','xl','2xl']} >Software Development, </Text>
                    
        
            <Text fontSize={['lg','xl','2xl']} >Data Science & Back End Development.</Text>
            </Stack>
              <Button borderRadius='30' color='gray.600' rightIcon={<ChevronDownIcon />} 
                colorScheme='gray' variant='outline' >MY BEST WORK</Button> 
            
            
            </Container>
            </Center> 
    );
}
export default Home;