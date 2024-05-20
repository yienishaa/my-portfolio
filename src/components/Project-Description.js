import {  Container, Grid,GridItem,Text, Divider} from '@chakra-ui/react'
import "@fontsource/yeseva-one"; 

const projecttitle = ["E-Commerce Website", "Portfolio Website", "SMART ROAM", "Lost Roamer heat map", "Bill Shock Prevention Notifier"]


const ecom_ov = "Before the new design the old design was a static HTML/CSS website with no shopping cart facility. The new feature additions were adding a shopping cart, subscribing for subscription system to replace old parts, PayPal payments (one time and subscription charging), appointment reminders via email and SMS (twilio), shipping label creation with Canada Post. Keeping track of items added to cart by users, user management system"
const website_ov = "This website you are on is created as per design from Nadisha, and coded with the above technologies"
const smartroam_ov = "Developed a USSD menu to activate, deactivate Smartroam feature, to check roaming rates for each country. Used the Mylinex USSD gateway to integrate the system."
const lostroam_ov = "The GLR (Gateway Location Register) data was uploaded periodically to a Oracle SQL database which had information of roamers. This information included the 3GPP location update / detach messages, that information was used to get a count of the total number of roamers getting detached from a particular RNC, the locations of RNCs nationwide was got from a mysql database, and the highest detach rate RNC locations were plotted on a google map. This visual information was used by the network planning department to optimize the network nodes."
const billshock_ov = "Back End: Mobile data CDRs(Call Detail Records) were periodically uploaded to the Data Warehouse by the GGSN. The CDRs recorded usage for a period of time, if the usage exceeded the threshold CDR recording time, a new one would be created. So to get the usage for a day/hour partial CDRs had to be consolidated by a Unique ID. I queried usages of Roamers and sent SMS notifications if they exceed a particular $$ value."

const overviews = [ ecom_ov, website_ov, smartroam_ov, lostroam_ov, billshock_ov]


const skills_ecomm = "PHP, MySQL, HTML, CSS, JavaScript, Twilio, PayPal, Canada Post"
const skills_web = "React, Node.js, Chakra-UI, Framer Motion"
const skills_sr = "VXML, SMTP, MySQL"
const skills_lr = "PHP, HTML, CSS, Google Maps API, MySQL, Oracle SQL"
const skills_bs = "PHP, Java, MySQL, MSSQL, HTML, CSS, SMTP, Alcatel-Lucent 7750 GGSN"

const skills = [skills_ecomm, skills_web, skills_sr, skills_lr, skills_bs]

const status_e = "Status: Completed and live"
const status_web = "Ongoing"
const status_sr = "Completed and deployed on Etisalat network #123#"
const status_lr = "Completed and deployed internally"
const status_bs = "Completed and deployed internally"

const status = [status_e,status_web, status_sr, status_lr, status_bs]



function ProjectDescription({id}){
    
    return(
        <Container size='lg'>
            <Text fontSize='4xl' fontFamily='Yeseva One' color='textBrand.100'>{projecttitle[id]}</Text>
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
                
                <GridItem>{overviews[id]}</GridItem>
                <GridItem>{status[id]}</GridItem>

                <GridItem colSpan={2}><b>SKILLS</b></GridItem>
                <GridItem>{skills[id]}</GridItem>

            </Grid>


        </Container>
    );
}
export default ProjectDescription;