import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { Toolbar, Typography } from '@material-ui/core'
import { BiPlusMedical } from "react-icons/bi"
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
   
      <>
          <AppBar position="static" >
            <Toolbar>
                  <Typography variant="title" color="inherit">
                        <h2><BiPlusMedical /> MedLink </h2>
                        
                  </Typography>
            </Toolbar>
          </AppBar>
      </>
    
   )

 }

export default Navbar