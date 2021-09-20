import React from 'react';
import GridContainer from "../../components/Dashboard/Grid/GridContainer.js";
import GridItem from "../../components/Dashboard/Grid/GridItem.js";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const TermsAndConditions=()=>{
    function Copyright() {
        return (
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
              Medlink
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
    }
 
    const headingStyle1 = {color: '#126e82',marginTop: '50px',fontSize: '30px', textAlign: 'center'};
    const paragraphStyle1 = {textAlign: 'center',fontSize: '18px'};
    const gridStyle = {margin: '40px'}
    const headingStyle2 = {color: '#126e82',fontSize: '24px'};
    const paragraphStyle2 = {fontSize: '18px'};

    
    return(
        <GridContainer> 
        <GridItem xs={12} align='center'>
            <><h1 style={headingStyle1}>MedLink - Terms And Conditions</h1>
            <p1 style={paragraphStyle1}>Welcome to MedLink These terms and conditions outline the rules 
                and regulations for the use of MedLink’s Website.</p1></>
        </GridItem>

        <GridItem xs={12} style={gridStyle}>
            <h2 style={headingStyle2}>About</h2>
            <p2 style={paragraphStyle2}>
                By accessing this website we assume you accept these terms 
                and conditions in full. Do not continue to use MedLink’s 
                website if you do not accept all of the terms and conditions 
                stated on this page.
            </p2>
            <br/>
            <br/>
            
        
            <p3 style={paragraphStyle2}>
                The following terminology applies to these Terms and Conditions, 
                Privacy Statement and Disclaimer Notice and any or all Agreements: 
                Client, You and Your refers to you, the person accessing this website 
                and accepting the Company’s terms and conditions. The Company, Ourselves,
                We, Our and Us, refers to our Company. Party, Parties, or Us, refers 
                to both the Client and ourselves, or either the Client or ourselves.
            </p3>
            <br/> 

            <p4 style={paragraphStyle2}>
                Any use of the above terminology or other words in the singular, 
                plural, capitalisation and/or he/she or they, are taken as 
                interchangeable and therefore as referring to same.
            </p4>
            <br/>
            <br/>

            <h3 style={headingStyle2}>License</h3>
            <p4 style={paragraphStyle2}>
                Unless otherwise stated, MedLink and/or its licensors own the 
                intellectual property rights for all material on MedLink. 
                All intellectual property rights are reserved.  
            </p4>
            <br/>
            <br/>

            <h4 style={headingStyle2}>Disclaimer</h4>
            <p5 style={paragraphStyle2}>
                To the maximum extent permitted by applicable law, we exclude all 
                representations, warranties and conditions relating to our website 
                and the use of this website (including, without limitation, any 
                warranties implied by law in respect of satisfactory quality, fitness 
                for purpose and/or the use of reasonable care and skill).

            </p5>

            <br/>
            <br/>

            <p6 style={paragraphStyle2}>
                The limitations and exclusions of liability set out in 
                this Section and elsewhere in this disclaimer:
            </p6>
            <br/>
            <br/>

            <p7 style={paragraphStyle2}>
                01) are subject to the preceding paragraph; and
                <br/>
                02) govern all liabilities arising under the disclaimer or
                    in relation to the subject matter of this disclaimer, including 
                    liabilities that arise in contract, tort (including negligence) 
                    and for breach of statutory duty.
            </p7>
            <br/>
            <br/>
                
            <p8 style={paragraphStyle2}>
                To the extent that the website and the information and services on 
                the website are provided free of charge, we will not be liable for 
                any loss or damage of any nature.
            </p8>
                
            
        </GridItem>
        <GridItem xs={12} align='center'>
            <Box mt={5}>
                <Copyright />
            </Box>
        </GridItem>
        </GridContainer>
    )
}

export default TermsAndConditions