import { Request, Response } from "express";
import loginService from "../service/LoginService";

const login = async (req: Request, res: Response) => {
    const findAuthor = await loginService.find(req.body);
    
    if (findAuthor.code) {
        return res.status(findAuthor.code)
            .json({ message: findAuthor.message });
    }

    const returnToken = loginService.login(req.body);
    
    res.status(200).json({
        admin: findAuthor,
        adminToken: returnToken,
    });
};

export default { login };
