import Joi from "joi";

const UpdateSchema = Joi.object({
  title: Joi.string().min(8).required(),
  description: Joi.string().min(8).required(),
  content: Joi.string().min(3).required(),
  tags: Joi.required(),
});

export default UpdateSchema;