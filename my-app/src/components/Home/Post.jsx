import React from 'react'
import {Container, Grid, makeStyles, Typography,Box} from '@material-ui/core'

const useStyle=makeStyles({
    image:{
        height:"200px",
        width:"250px",
        borderRadius:"3px",
        boxShadow:"2px 2px  #888888"
    },
    container:{
        marginLeft:"0px",
        marginTop:"5px",
        fontSize:"5px",
        border:"1px",
        borderRadius:"10",
        //display:"flex",
       // alignItems:"center",
        flexDirection:"coloumn",
        wordBreak:"break-word"
    }
})

export const Post = ({post}) => {
    const classes= useStyle();
  return (
      <>
        <Box className={classes.container} >
      <img src={require("./postImg.jpg")} className={classes.image} />
      <Typography >Category: {post.category}</Typography>
      <Typography>Author: {post.author}</Typography>
      <Typography>Topic: {post.title}</Typography>
      
      </Box>
      </>
    
    
  )
}
