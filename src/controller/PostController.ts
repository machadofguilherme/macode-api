import { Request, Response } from "express";
import postService from "../service/PostService";

const find = async (_req: Request, res: Response) => {
    const result = await postService.find();
    res.status(200).json(result);
};

const create = async (req: Request, res: Response) => {
    const returnMessage = await postService.create(req.body);    
    res.status(201).json(returnMessage);
};

export default { create, find };
