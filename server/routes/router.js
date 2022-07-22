import  express,{Router}  from "express";

import { createPost,getAllPosts,getPostById,deleteSinglePost,updatePost } from "../controller/postController.js";
const router=express.Router();



router.post("/create",createPost)


router.get("/posts",getAllPosts)

router.get("/post/:id", getPostById)
router.delete("/delete/:id",deleteSinglePost)
router.post("/update/:id", updatePost)

export default router