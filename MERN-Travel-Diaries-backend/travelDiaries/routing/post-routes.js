import { Router } from "express";
import { addPost, deletPost, getAllPosts, getPostById, updatePost } from "../controllers/post-controllers";

const postRouter = Router();

postRouter.get("/",getAllPosts)
postRouter.post("/",addPost)
postRouter.get("/:id",getPostById)
postRouter.put("/:id",updatePost)
postRouter.delete("/:id",deletPost)

export default postRouter;