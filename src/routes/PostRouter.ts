import { Router } from "express";

import postController from "../controller/PostController";
import validatePostBody from "../middleware/validatePostBody";
import pagination from "../middleware/pagination";
import validateFindPost from "../middleware/validateFindPost";

const post = Router();

post.get("/post", pagination, postController.find);
post.get("/post/:id", validateFindPost.check, postController.findOne);
post.post("/post", validatePostBody.check, postController.create);

export default { post };
