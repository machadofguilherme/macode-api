import Joi from 'joi';

const TagSchema = Joi.string().min(3).required();

export default TagSchema;