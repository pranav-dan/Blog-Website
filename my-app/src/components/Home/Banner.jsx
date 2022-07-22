import { makeStyles,Box } from '@material-ui/core'
import React from 'react'

const useStyle=makeStyles({
    banner:{
        width:"100%",
        height:"40vh",
        
    }
})

export const Banner = () => {
    const classes=useStyle()
  return (
      <>
      <Box style={{overflowX:"hidden"}}>
      <img src={require("./banner4.jpg")} className={classes.banner} />
      </Box>
      </>
    
    
  )
}
