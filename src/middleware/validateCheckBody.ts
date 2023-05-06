import { NextFunction, Request, Response } from "express";

const check = (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({
            message: "Field not filled",
        });
    }

    next();
};

export default { check };
