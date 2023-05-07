import { Request, Response } from "express";
import postService from "../service/PostService";

const create = async (req: Request, res: Response) => {
    const returnMessage = await postService.create(req.body);    
    res.status(201).json(returnMessage);
};

export default { create };
