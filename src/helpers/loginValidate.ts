import ILoginBody from "../interfaces/ILoginBody";
import LoginSchema from "../schemas/LoginSchema";
import { loginError } from '../utils/errorMap';

const loginValidate = (dataLogin: ILoginBody) => {
    const Error = LoginSchema.validate(dataLogin);
    const errorMessage = Error.error?.message;
    
    if (errorMessage) {
        return loginError;
    }
}

export default loginValidate;