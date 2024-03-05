import { Card, CardBody, Heading,SimpleGrid, Stack} from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import Etisalat_Logo from './Etisalat_Logo.png'
import x23e2_Logo from './x23e2_Logo.png'
import Scotiabank_logo from './Scotiabank_logo.png'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'


function Experience(){
    return(
        <SimpleGrid columns={1} spacing={10}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='filled'
                colorScheme="red"
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '10%' }}
                    maxH={{base: '100%', sm:'70%'}}
                    src={Scotiabank_logo}
                />

                <Stack>
                    <CardBody>
                    <Heading size='md'>Software Engineer - Intern</Heading>
                        <UnorderedList>
                            <ListItem>Customized ServiceNow Service Catalog forms and tables</ListItem>
                            <ListItem>Reverse-engineered notification generating script and presented the findings to 40+ ServiceNow 
                                developers to show how it could be improved</ListItem>
                            <ListItem>Performed peer code reviews for new implementations and changes done on scripts, and other modules</ListItem>
                            <ListItem>Executed System Integration Testing(SIT) for a ServiceNow patch upgrade and coordinated UAT testing 
                                with users and provided them technical support</ListItem>
                            <ListItem>Executed the migrated EDL(Enterprise Data Lake) scripts on the new EDL platform with Tidal scheduler</ListItem>
                            <ListItem>Troubleshooted the Python version errors, missing datafile etc. issues faced on the new platform with the help 
                                of Hadoop logs</ListItem>
                        </UnorderedList>
                    </CardBody>
                </Stack>
            </Card>

            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '10%' }}
                    maxH={{base: '100%', sm:'70%'}}
                    src={x23e2_Logo}
                />

                <Stack>
                    <CardBody>
                    <Heading size='md'>Full Stack Developer</Heading>
                        <UnorderedList>
                            <ListItem>Designed, developed and provided technical support for an e-commerce website developed in-house</ListItem>
                            <ListItem>Researching and applying relevant search engine optimization methods for websites managed</ListItem>
                            <ListItem>Collaborated with team members and assisted in designing features for a Google business management 
                                platform</ListItem>
                            <ListItem>Created and optimized PPC campaigns with Google Ads to align with business goals and objectives</ListItem>
                            <ListItem>Tracked KPIs and created reports to assess performance on a weekly basis</ListItem>
                            <ListItem>Wrote ad copies for advertisements, designed display posters for campaigns</ListItem>
                            <ListItem>Configured Google Tag Manager, Google Analytics, Google Search console to keep track of the website performance</ListItem>
                        </UnorderedList>
                    </CardBody>
                </Stack>
            </Card>

            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '10%' }}
                    maxH={{base: '100%', sm:'70%'}}
                    src={Etisalat_Logo}
                />

                <Stack>
                    <CardBody>
                    <Heading size='md'>Core Network Engineer</Heading>
                        <UnorderedList>
                            <ListItem>Created numerous KPI reports for overall network performance weekly for performance meetings, 
                                and monitored KPIs of each network nodes managed by the core network department including Session Border Controller 
                                (Oracle and GENBAND), Wireless Call Server (Nokia), Gateway GPRS Support Node (Nokia), Serving GPRS Support Node(Nokia) 
                                    and PCRF(ZTE)</ListItem>
                            <ListItem>Resolved trouble tickets assigned to the core network department both by local subscribers 
                                (through customer care call center, network operations department) as well as international service providers. 
                                Used Wireshark extensively for network trouble shooting</ListItem>
                            <ListItem>Trained new recruits and held informational sessions for trainees on what 
                                operations are managed by the core network department 
                                (which included mobile call flows, IDD calls flows)</ListItem>
                        </UnorderedList>
                    </CardBody>
                </Stack>
            </Card>

            </SimpleGrid>
    );
}
export default Experience;