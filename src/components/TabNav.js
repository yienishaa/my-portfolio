import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import About from './About';
import Experience from './Experience';


function TabNav(){
    return(
        <Tabs isFitted position="relative"  size="xl" variant="colorful" colorScheme='black' >
            <TabList>
                <Tab>About</Tab>
                <Tab>Experience</Tab>
                <Tab>Projects</Tab>
            </TabList>
            <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="gray.100"
                borderRadius="1px"
            />
            <TabPanels>
                <TabPanel>
                    <About/>
                </TabPanel>
                <TabPanel>
                    <Experience/>
                </TabPanel>
                <TabPanel>
                    <p>Projects</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
       
    );
    
}
export default TabNav;