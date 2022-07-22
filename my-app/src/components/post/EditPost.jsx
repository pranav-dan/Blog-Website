import {React,useState,useEffect} from 'react'
import {Box, makeStyles, InputBase, FormControl,Button, TextareaAutosize} from "@material-ui/core"
import { FaCalendar } from 'react-icons/fa'
import {BsFillTrashFill} from "react-icons/bs";
import {Link,useNavigate,useParams} from "react-router-dom"
import { getAllPosts, getPostById,updatePost } from '../Home/service/Service';


const useStyle= makeStyles({
  Libimage:{
    width:"100%",
    height:"40vh",
    
  },
  delImage:{
    size:"100px",
  },
  form:{
    display:"flex",
    flexDirection:"row",
    marginTop:"10px",
    marginLeft:"10px",
    overflowX:"hidden"
    
  },
  titleText:{
    flex:1,
    fontSize:"29px",
    left:"30px",
    textAlign:"center",
    fontWeight:"bold",
    overflowX:"hidden",
    
  },
  addBtn:{
    background:"rgb(255, 191, 0)" ,
    fontSize:"15px",
    fontWeight:"bold",
    marginTop:"-8px"
  },
  textArea:{
    width:"100%",
    margin:"20px",
    border:"none",
    fontSize:"19px",
    overflow:"hidden",
    outline:"none"
  },
  BtnLink:{
      color:"inherit",
      textDecoration:"none"
  }
})

const initaialState={
  title:"",
  desc:"",
  author:"Pranav",
  category:"ALL"
}


export const EditPost = () => {
    const [post,setPost]=useState({})
    const classes=useStyle();
    const {id}=useParams()
    const navigate=useNavigate()
    

  useEffect(()=>{
    const fetchData=async()=>{
      const postInfo=await getPostById(id)
      //console.log(postInfo)
      // console.log(postInfo._id)
      setPost(postInfo)
    }
    fetchData()
    
  },[])


  const updateText=(e)=>{
    setPost({...post,[e.target.name]:e.target.value})

    // sending id and post to the backend
    
  }
  
  const saveChanges=async()=>{
    const updatedPost=await updatePost(post._id,post)
    // navigate(`/detail/${post._id}`)
    console.log(updatedPost)
    navigate("/")
  }
        
  return (
    <>
    <Box>
      <img src={require("./detailPageImage.jpg")} className={classes.Libimage} />
      <FormControl className={classes.form}>
        <Box style={{overflowX:"hidden"}}>
          <Link to={"/create"} className={classes.BtnLink}><Button variant="contained" className={classes.addBtn} onClick={()=>saveChanges()} >Update Blog</Button></Link>
          <InputBase  placeholder='Title' className={classes.titleText} name="title" value={post.title}  onChange={(e)=>updateText(e)}/>
        </Box>
      </FormControl>
      <TextareaAutosize  className={classes.textArea}
      value={post.desc}
      minRows={5}
      name="desc"
      placeholder={"Tell your story..."}
      onChange={(e)=>updateText(e)}
      />
    </Box>
    
    </>
  )
}
