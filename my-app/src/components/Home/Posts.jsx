import {React,useEffect,useState} from 'react'
import { Post } from './Post'
import {Grid} from "@material-ui/core"
import {Link,useLocation} from "react-router-dom"
import { getAllPosts } from './service/Service'

export const Posts = () => {
  //const num=[1,2,3,4,5,7,8,9,10,11];
  const [posts, setPosts]=useState([])   // ititial is the empty array
  const {search} =useLocation()

  useEffect(()=>{
    const fetchData=async()=>{
      //console.log("Working")
      const Posts=await getAllPosts(search)
      //console.log("Working")
      //console.log(Posts)
      setPosts(Posts)
    }
    fetchData()
  },[search ])
  return (
    
    
    <Grid item container  style={{ gap: 15 }} >
    {/* {num.map((post)=>(
      <Link to="/detail" style={{color:"inherit" , textDecoration:"none"}}> <Post/> </Link>
    ))} */}
    

    {posts.map((post)=>(
      <Link to={`/detail/${post._id}`} style={{color:"inherit" , textDecoration:"none"}}> <Post post={post}/> </Link>      // post={post} check
    ))}
    
    </Grid>
    
    
  )
}
