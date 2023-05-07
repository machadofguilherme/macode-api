import { NextFunction, Request, Response } from "express";

const check = (req: Request, res: Response, next: NextFunction) => {
    const { author, title, date, description, content } = req.body;

    if (!author || !title || !date || !description || !content) {
        return res.status(400).json({
            message: "Field not filled",
        });
    }

    next();
};

export default { check };
