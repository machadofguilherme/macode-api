import { Request, Response } from "express";
import tagService from "../service/TagService";

const find =
    async (req: Request, res: Response): Promise<Response | void> => {
        const { tag } = req.body;
        const result = await tagService.find(tag);

        if ('code' in result) {
            return res
                .status(result.code)
                .json({ message: result.message });
        }

        return res.status(200).json(result);
}

export default { find };