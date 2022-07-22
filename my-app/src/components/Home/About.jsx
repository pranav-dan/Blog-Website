import React from 'react'
import { makeStyles,Typography } from '@material-ui/core'

export const About = () => {

    const useStyle=makeStyles({
        aboutPic:{
            width:"100%",
            height:"40vh"
        },
        aboout:{
            margin:"15px",
            fontSize:"20px"
        },
        endNote:{
            textAlign:"center",
            fontSize:"30px",
            margin:"90px"
        }
    })

    const classes=useStyle()
  return (
    <>
        <img src={require("./about2.jpg")} className={classes.aboutPic} />
        <Typography className={classes.aboout}>Hello, I am Pranav Dandwate. I am doing my undergraduation from MIT WPU. This is my first MERN stack project.</Typography>
        <Typography className={classes.endNote}>Happy Blogging</Typography>
    </>
  )
}
