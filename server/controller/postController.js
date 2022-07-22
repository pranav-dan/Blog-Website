import  express  from "express";
import Post from "../schema/post-schema.js";
import mongoose from "mongoose";


export const createPost=async(req,res)=>{
    //console.log(req.body)  
   try{
        const post=await new Post(req.body)
        post.save();
        //db.posts.insertOne(post)     /// check this if not working

        res.status(200).json('Blog saved')
   }
   catch(error){
       res.status(500).json(error);
   }
}


export const getAllPosts=async(req,res)=>{
    // const author=req.query.author
     const category=req.query.category
     let response
    
    try{
         if(category){
             response=await Post.find({category:category})
            
        }
        else{
            response=await Post.find({})
        }
        
         
        //console.log("server get working")
        res.status(200).json(response)

    }catch(error){
        res.status(500).json(error)
    }
}

export const getPostById=async(req,res)=>{
    try{
        const resById=await Post.findById(req.params.id)
        res.status(200).json(resById)
    } catch(error){
        res.status(500).json(error)
    }
}


export const deleteSinglePost=async(req,res)=>{
    try{
        const deletePost=await Post.findById(req.params.id)
        await deletePost.delete();
        res.status(200).res("Post deleted successfully") 
    }catch(error){
        res.status(500).json(error)
    }
}

export const updatePost=async(req,res)=>{
    try{
        await Post.findByIdAndUpdate(req.params.id,{$set:req.body})

    }catch(error){
        res.status(500).json(error)
    }
}