import {React,useState} from 'react'
import {Box, makeStyles, InputBase, FormControl,Button, TextareaAutosize} from "@material-ui/core"
import { FaCalendar } from 'react-icons/fa'
import {BsFillTrashFill} from "react-icons/bs";
import {Link,useNavigate} from "react-router-dom"
import {create} from "./service/Service"

const useStyle= makeStyles({
  Libimage:{
    width:"100%",
    height:"40vh",
    
  },
  form:{
    display:"flex",
    flexDirection:"row",
    marginTop:"10px",
    marginLeft:"10px",
    overflow:"hidden"
    
  },
  titleText:{
    flex:1,
    fontSize:"29px",
    left:"30px",
    fontWeight: 'bold',
    fontFamily:"sans-serif",
    overflow:"hidden"
  },
  addBtn:{
    background:"rgb(255, 191, 0)" ,
    fontSize:"15px",
    fontWeight:"bold",
    float:"right",
    right:"30px",
    overflowX:"hidden"
  },
  textArea:{
    width:"100%",
    margin:"20px",
    border:"none",
    fontSize:"19px",
    outline:"none ",
    overflowX:"hidden"
  },
  BtnLink:{
      color:"inherit",
      textDecoration:"none"
  },
  
  select:{
    backgroundColor:"rgb(211,211,211)",
    color:"black",
    text:"25px",  
    borderRadius:"4px",
    fontWeight: "20px",
    border:"none"
  },

  
})

const initaialState={
  title:"",
  desc:"",
  author:"Pranav",
  category:""
}


export const CreateBlog = () => {

  const updateState=(e)=>{
    setState({...state,[e.target.name]:e.target.value})     // check this if not working
    //console.log(e.target.value)
  }

  const selectCategory=(e)=>{
    const selectedCategory=e.target.value
    //console.log(selectedCategory)
    setState({...state,category:selectedCategory}) 
    //console.log(state.category)

  }

    const classes=useStyle();
    const[state, setState]=useState(initaialState);    // initial state must be passed in useState

    const navigate=useNavigate()

    const savePost=async()=>{
        await create(state);
        navigate("/")               /// check if not working
    }


    

  return (
    <>
    <Box style={{overflowX:"hidden"}}>  
      <img src={require("./detailPageImage.jpg")} className={classes.Libimage} />
      <FormControl className={classes.form}>
      <select  id="category" onChange={(e)=>selectCategory(e)} className={classes.select}>
      <option value="" disabled selected hidden >Add Category</option>
        <option value="dataScience" >Data Science</option>
        <option value="sports" >Sports</option>
        <option value="economics" >Economics</option>
        <option value="movies" >Movies</option>
      </select>
      <InputBase onChange={(e)=>updateState(e)} placeholder='Title' className={classes.titleText} name="title"/>
      <Link to={"/create"} className={classes.BtnLink}><Button variant="contained" className={classes.addBtn} onClick={()=>savePost()}>Add Blog</Button></Link>
      </FormControl>
      <Box style={{overflowX:"hidden"}}>
      <TextareaAutosize  className={classes.textArea}
      onChange={(e)=>updateState(e)}
      minRows={5}
      name="desc"
      placeholder={"Tell your story..."}
      />
      </Box>
    </Box>
    
    </>
  )
}
