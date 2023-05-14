import { Router } from "express";

import postController from "../controller/PostController";
import validatePostBody from "../middleware/validatePostBody";

const post = Router();

post.get("/post", postController.find);
post.post("/post", validatePostBody.check, postController.create);

export default { post };
