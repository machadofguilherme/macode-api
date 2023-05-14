import Joi from "joi";

const PostSchema = Joi.object({
    author: Joi.string().min(6).required(),
    title: Joi.string().min(8).required(),
    date: Joi.string().min(6).required(),
    description: Joi.string().min(8).required(),
    tags: Joi.required(),
    content: Joi.string().min(3).required()
});

export default PostSchema;