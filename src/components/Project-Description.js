import {  Container, Grid,GridItem,Text, Divider} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 
//import { ReactComponent as designWires } from './images/25703377_10667651479944.svg';
//import logs from './images/abstract-3d-thin-line-wireframe-for-futuristic-design-element-png.webp'
//import cone from './images/cone-2789627_1920.png'
import geomatric from './images/geometric-8015996_1920.png'


const skills_ecomm = "PHP, MySQL, HTML, CSS, JavaScript, Twilio, PayPal, Canada Post"
const overviewecomm = "Before the new design the old design was a static HTML/CSS website with no shopping cart facility. The new feature additions were adding a shopping cart, subscribing for subscription system to replace old parts, PayPal payments (one time and subscription charging), appointment reminders via email and SMS (twilio), shipping label creation with Canada Post. Keeping track of items added to cart by users, user management system"
const status_e = "Completed and deployed internal"


function ProjectDescription(){
    
    return(
        <Container size='lg'>
            <Text fontSize='4xl' fontFamily='Yeseva One' color='textBrand.100'>E-Commerce Website</Text>
            <Divider />
            
            <Grid
                //h='200px'
                color='textBrand.100'
                templateColumns='repeat(2, 1fr)'
                rowGap={5}
                columnGap={10}
                
                >
                
                <GridItem><b>OVERVIEW</b></GridItem>
                <GridItem><b>STATUS</b></GridItem>
                
                <GridItem>{overviewecomm}</GridItem>
                <GridItem>{status_e}</GridItem>

                <GridItem colSpan={2}><b>SKILLS</b></GridItem>
                <GridItem>{skills_ecomm}</GridItem>

            </Grid>


        </Container>
    );
}
export default ProjectDescription;