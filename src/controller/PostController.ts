import { Request, Response } from "express";
import postService from "../service/PostService";

const find = async (req: Request, res: Response) => {
    const limit = Number(req.body.limit);
    const offset = Number(req.body.offset);
    const endpoint = '/post';
    
    const result = await postService
        .find(limit, offset, endpoint);

    res.status(200).json(result);
};

const findOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    const result = await postService.findOne(id);
    res.status(200).json(result);
}

const create = async (req: Request, res: Response) => {
    const returnMessage = await postService.create(req.body);    
    res.status(201).json(returnMessage);
};

const findByIdAndUpdate = async (req: Request, res: Response) => {
    const { id } = req.params;

    const returnMessage = await postService
        .findByIdAndUpdate(req.body, id);

    if (returnMessage?.code === 400) {
        res.status(400).json({ message: returnMessage.message });
    }

    res.status(200).json(returnMessage);
};

export default {
    create,
    find,
    findOne,
    findByIdAndUpdate
};
