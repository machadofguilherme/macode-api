import { Router } from "express";
import tagController from "../controller/TagController";

const tag = Router();

tag.post('/tag', tagController.find);

export default { tag };