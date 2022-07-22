import axios from "axios"

const url="http://localhost:8080";
export const create=async(post)=>{
    try{
        //console.log("api first working")
        return await axios.post(`${url}/create`,post)
        
    } catch(error){
        
        console.log("error in api call", error)
    }
}


export const getAllPosts=async(params)=>{
    //console.log("getAllPOst reached")
    try{
        let allPosts= await axios.get(`${url}/posts${params}`) 
        //console.log("reached")
        return allPosts.data;
    } catch(error){
        console.log("error in get api", error)
    }
}

export const getPostById=async(id)=>{
    try{
        console.log("id is ", id)
        let postByid=await axios.get(`${url}/post/${id}`)
        console.log("get api with id working")
        return postByid.data
    }catch(error){
        console.log("Error in get request by id" , error)
    }
}

export const deleteSinglePost=async(id)=>{
    try{
        await axios.delete(`${url}/delete/${id}`)
    }catch(error){
        console.log("Error in delete api")
    }
}


export const updatePost=async(id,post)=>{
    try{
        const updatedPost=await axios.post(`${url}/update/${id}`, post)
        console.log("update api working successfully")
        return updatedPost

    }catch(error){
        console.log("Error in update api call", error)
    }
}