import { NextFunction, Request, Response } from "express";

const check = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            message: "Field not filled",
        });
    }

    next();
};

export default { check };
