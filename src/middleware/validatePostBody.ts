import { NextFunction, Request, Response } from "express";

const check = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const {
        author, date, title,
        description, tags, content
    } = req.body;

    if (!author
         || !date
         || !title
         || !description
         || !tags || !content
    ) {
        return res.status(400).json({
            message: "Field not filled",
        });
    }

    next();
};

export default { check };
