import Joi from "joi";

const PostSchema = Joi.object({
    author: Joi.string().min(6).required(),
    title: Joi.string().min(8).required(),
    date: Joi.string().min(6).required(),
    description: Joi.string().min(8).required(),
    content: Joi.string().min(30).required(),
});

export default PostSchema;