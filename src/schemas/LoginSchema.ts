import Joi from "joi";

const email = Joi.string().email().min(10).required();
const password = Joi.string().min(6).required();

export default { email, password };
