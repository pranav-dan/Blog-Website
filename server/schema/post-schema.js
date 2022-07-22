import mongoose from "mongoose";


const PostSchema=mongoose.Schema({
    title:{
        type:"string",
        required:true,
        unique:true
    },
    desc:{
        type:"string",
        required:true,
    },
    author:{
        type:"string",
        required:true,
    },
    category:{
        type:"string",
        required:true,
        unique:false
    }

})

const post=mongoose.model('post',PostSchema)
export default post