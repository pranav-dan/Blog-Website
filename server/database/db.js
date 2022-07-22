import mogoose from "mongoose";



const Connection=async()=>{
    try{
    const URL="mongodb+srv://pranav:pranav2001@cluster0.ivwj6.mongodb.net/BLOGWEBSITE?retryWrites=true&w=majority";

   await mogoose.connect(URL,{useUnifiedTopology:true});
   console.log("MonogoDB connected successfully")
    } catch(error){
        console.log("Error while connecting to monodb", error)
    }
}


export default Connection;
