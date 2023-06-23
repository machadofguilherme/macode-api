import {
  NextFunction,
  Request,
  Response,
} from "express";

const check = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {
    title,
    description,
    tags,
    content,
  } = req.body;

    const { id } = req.params;
  
  if (
    !title
    || !description
    || !content
    || !tags
    || !id) {
        return res.status(400).json({
            message: "Field not filled",
        });
    }

    next();
}

export default { check };