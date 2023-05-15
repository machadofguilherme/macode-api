import { Router } from "express";

import postController from "../controller/PostController";
import validatePostBody from "../middleware/validatePostBody";
import pagination from "../middleware/pagination";

const post = Router();

post.get("/post", pagination, postController.find);
post.post("/post", validatePostBody.check, postController.create);

export default { post };
