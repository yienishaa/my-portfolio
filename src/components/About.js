import { Card, CardHeader, CardBody, Tag, Center,Text,Box, SimpleGrid, Image, Heading, IconButton, Grid, GridItem} from '@chakra-ui/react'
import IMG_0537 from './IMG_0537.jpeg'
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { FaLinkedin, FaGithub } from "react-icons/fa";

function About(){
    return(
        <SimpleGrid columns={2} spacing={10}>
            <Center>
            <Box>
                <Image 
                src={IMG_0537}
                objectFit='cover'
                borderRadius='full'
                boxSize='350px'/>
            </Box>
            </Center>
            <Center>
            <Card>
            <CardBody>
                <Text as='b' color='gray.700' fontSize='4xl'>
                    Hi,<br></br>
                    I am Yienisha Abeyratne, a 3rd Year CS student at York University.<br></br>
                    I am passionate about <spacing></spacing>
                    <Tag variant='solid' colorScheme='teal'><Text as='b' fontSize='4xl'>Software Development</Text></Tag><spacing> </spacing>
                    <Tag variant='solid' colorScheme='yellow'><Text as='b' fontSize='4xl'>Data Science</Text></Tag><spacing> </spacing>
                    <Tag variant='solid' colorScheme='pink'><Text as='b' fontSize='4xl'>Back End Development</Text></Tag>
                </Text>
            </CardBody>
            </Card>
            </Center>
            <Card>
                <CardHeader><Heading as='h1' size='xl'>Skillset</Heading></CardHeader>
                <CardBody>
                    <SimpleGrid columns={6} spacing={10}>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" 
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" 
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"                
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"                                
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"                 
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"                               
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"                                                       
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original-wordmark.svg"
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original-wordmark.svg"
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original-wordmark.svg"                                                      
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"                                                      
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg"                                                       
                            objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
                                objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-original.svg"
                                objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg"
                                objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg"
                                objectFit='cover'/>
                        </Tag>
                        <Tag>
                            <Image 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                                objectFit='cover'/>
                        </Tag>
                    </SimpleGrid>
                    
                </CardBody>
            </Card>
            <Card>
                <CardHeader><Heading as='h1' size='xl'>Get In Touch</Heading></CardHeader>
                <CardBody>
                    <Grid
                        templateRows='repeat(3, 1fr)'
                        templateColumns='repeat(5, 1fr)'
                        gap={4}
                    >
                        <GridItem >
                            <IconButton
                                variant='solid'
                                colorScheme='gray'
                                aria-label='Send email'
                                icon={<EmailIcon />}
                            />
                        </GridItem>
                        <GridItem colSpan={4}>
                            <Text>
                                yienisha.abeyratne@gmail.com
                            </Text>
                        </GridItem>
                        <GridItem >
                            <IconButton
                                variant='solid'
                                colorScheme='gray'
                                aria-label='Send email'
                                icon={<PhoneIcon />}
                            />
                        </GridItem>
                        <GridItem colSpan={4}>
                            <Text>
                                +1(437) 237-3254
                            </Text>
                        </GridItem>
                        <GridItem >
                            <IconButton
                                variant='solid'
                                colorScheme='gray'
                                aria-label='Send email'
                                icon={<FaLinkedin />}
                            />
                        </GridItem>
                        <GridItem colSpan={4}>
                            <Text>
                               link
                            </Text>
                        </GridItem>
                        <GridItem >
                            <IconButton
                                variant='solid'
                                colorScheme='gray'
                                aria-label='Send email'
                                icon={<FaGithub />}
                            />
                        </GridItem>
                        <GridItem colSpan={4}>
                            <Text>
                               link
                            </Text>
                        </GridItem>
                    </Grid>
                </CardBody>
            </Card>
        </SimpleGrid>
        
    );
}
export default About;