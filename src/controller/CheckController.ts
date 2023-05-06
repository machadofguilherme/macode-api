import { Request, Response } from "express";
import { tokenValidate } from "../utils/tokenOperations";

const tokenChecker = (req: Request, res: Response) => {
    const token = tokenValidate(req.body.token);
    
    if (!token) {
        return res.status(404)
            .json({ tokenStatus: 404 });
    }
    
    res.status(200).json({
        tokenStatus: 200
    });
};

export default { tokenChecker };
