import express from "express"
import Connection from "./database/db.js"
import Router from "./routes/router.js"
import cors from "cors"
import bodyParser from "body-parser"

const app= express()
 

app.use(cors())
app.use(bodyParser.json({extended:true}));
// app.use(bodyParser.urlencoded({extended:true}))
app.use("/", Router)
app.use(express.json())

app.get("/", (req, res)=>{
    console.log("get working")
    //res.send("Yo server working")
})

Connection()


app.listen(8080, ()=>console.log("server running"))


