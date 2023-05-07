import Joi from "joi";

const LoginSchema = Joi.object({
    email: Joi.string().email().min(10).required(),
    password: Joi.string().min(6).required(),
});

export default LoginSchema;
