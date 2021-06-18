import React from 'react'
import Navbar from '../../components/AppBar/AppAppBar'
import AppFooter from '../../components/Footer/AppFooter'
import Button from '@material-ui/core/Button'
import SignUpCustomer from '../../components/Body/Signup'


/**
* @author
* @function Home
**/

const Home = (props) => {
  return(
    <div>
     
          <Navbar>

          </Navbar>
          
          <Button onClick={()=>alert('Hello')} variant="contained" color="primary">
        Hello World
      </Button>
          <AppFooter/>
    </div>
   )

 }

export default Home