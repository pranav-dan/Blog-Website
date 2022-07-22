import React,{useState,useEffect} from 'react'
import {Box, makeStyles, InputBase, FormControl,Button, TextareaAutosize,Typography} from "@material-ui/core"
import { FaCalendar } from 'react-icons/fa'
import {BsFillTrashFill} from "react-icons/bs";
import { getPostById, deleteSinglePost } from '../Home/service/Service';
import { useParams,useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const useStyle= makeStyles({
  Libimage:{
    width:"100%",
    height:"50vh",
    overflow:"hidden",
    margin:"0"
  },
  delImage:{
    size:"100px",
    
  },
  form:{
    display:"flex",
    flexDirection:"row",
    marginTop:"10px",
    marginLeft:"10px",
    
  },
  titleText:{
    flex:1,
    fontSize:"29px",
    left:"30px",
    fontWeight:"bold",
    textAlign:"center"
  },
  delBtn:{
    background:"rgb(210, 4, 45)" ,
    fontSize:"10px",
    fontWeight:"bold",
    width:"70px",
    height:"35px",
    paddingRight:"20px",
    marginRight:"12px"
  },
  textArea:{
    width:"100%",
    margin:"20px",
    border:"none",
    fontSize:"19px",
    marginRight:"15px"
  },
  // author:{
  //   display:"flex",
  //   justifyContent:"right",
  //   padding:"20px"
    
  // },
  editBtn:{
    background:"rgb(204,204,0)",
    cursor:"pointer",
    paddingRight:"10px",
    width:"70px",
    height:"35px",
    borderRadius:"5px",
    fontSize:"10px",
    fontWeight:"bold",
    border:"none",
    
  },

  box:{
    display:"flex",
    flexDirection:"row",
    textAlign: "justify",
    overflowX:"hidden",
    width:"200px"
    
  }
})



export const DetailPostInfo = () => {            // match is the default prop
  
 const {id}=useParams()
 console.log(id)
  //let Id={id}
  const classes=useStyle();
  
  const [post,setPost]=useState({})
  
useEffect(()=>{
  const fetchData=async()=>{
    const postInfo=await getPostById(id)

    setPost(postInfo)
  }
  fetchData()
  
},[])



const navigate=useNavigate()
const deleteBlog=async()=>{
  await deleteSinglePost(post._id)
  navigate("/")
}
  return ( 
    <>
    <Box style={{overflow:"hidden"}}>
      <img src={require("./detailPageImage5.jpg")} className={classes.Libimage} />
      <FormControl className={classes.form}>
      {/* <Button variant="contained" className={classes.addBtn} onClick={()=>deleteBlog()}>Delete</Button>   */}
        <Typography className={classes.titleText}> {post.title} </Typography>
        {/* <Typography className={classes.author}>Author</Typography> */}
        <Box className={classes.box}>
        <Button variant="contained" className={classes.delBtn} onClick={()=>deleteBlog()}>Delete</Button>  
        <Link to={`/update/${post._id}`} style={{textDecoration:"none"}}><Button className={classes.editBtn} variant="contained">EDIT</Button></Link>
        </Box>
      </FormControl>
      {/* <TextareaAutosize  className={classes.textArea}
      minRows={5}
      placeholder={"This is demo blog from Pranav "}
      /> */}
      <Typography className={classes.textArea}>{post.desc}</Typography>
    </Box>
    
    
    </>
  )
}
