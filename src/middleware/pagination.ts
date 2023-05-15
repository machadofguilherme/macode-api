import {
    NextFunction,
    Request,
    Response,
} from "express";

let numberLimit;
let numberOffset;

const pagination = (
    req: Request,
    _res: Response,
    next: NextFunction,
    ) => {
        const { limit, offset } = req.query;

        numberLimit = Number(limit);
        numberOffset = Number(offset);

        if (!numberLimit || !numberOffset) {
            numberLimit = 5;
            numberOffset = 0;
        }
        
        req.body.limit = numberLimit;
        req.body.offset = numberOffset;

        next();
}

export default pagination;