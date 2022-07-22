import{Box,Toolbar, Typography, AppBar, makeStyles,Grid} from "@material-ui/core"

import {Link,useNavigate} from "react-router-dom"
import React from 'react'


const useStyle=makeStyles({
    navBar:{
        background:"black",
        overflow:"hidden"
        
    },
    container:{
        justifyContent:"right",
        fontSize:"20px",
        "& > *":{        // this apply the css in all the child component of the parent component 
            padding:"20px"
        }
    },
    title:{
        justifyContent:"right"
    },
    link:{
      color:"inherit",
      textDecoration:"none"
    }
})

export const Header = () => {
    const classes=useStyle();
    const navigate=useNavigate()
  

  return (
    
      <AppBar position="static" className={classes.navBar}>
        <Toolbar >
        <Grid container className={classes.title}>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            My Blog
          </Typography>
          </Grid>
        
          <Grid container className={classes.container}>
          <Link to="/" className={classes.link}><Typography variant="h7" component="div" sx={{ flexGrow: 1 }} >
            Home
          </Typography> </Link>

          <Link to="/about" className={classes.link}>
            <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                About
            </Typography>
          </Link>
          <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
            Contact
          </Typography>
          

          </Grid>
        </Toolbar>
      </AppBar>
    
  )
}


