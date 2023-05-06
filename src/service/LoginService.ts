import dotenv from 'dotenv';

import ILoginBody from "../interfaces/ILoginBody";
import Author from "../models/AuthorSchema";
import LoginSchema from "../schemas/LoginSchema";
import { generatePassword } from "../utils/passwordOperations";
import { ILogin, ILoginError } from '../interfaces/ILogin';
import { tokenGenerate } from '../utils/tokenOperations';

dotenv.config();

const { PASSWORD } = process.env;

const login = (payload: object): object => {
    return { token: tokenGenerate(payload) };
};

const find = async ({ email, password }: ILoginBody): Promise<ILogin | ILoginError> => {
    const errorMail = LoginSchema.email
        .validate(email);

    const errorPassword = LoginSchema.password
        .validate(password);
    
    if (errorMail.error) {
        const error: ILoginError = {
            code: 400,
            message: errorMail.error?.message,
        };

        return error;
    }

    if (errorPassword.error) {
        const error: ILoginError = {
            code: 400,
            message: errorPassword.error?.message,
        };
        
        return error;
    }

    const encryptPassword = generatePassword(String(PASSWORD));

    const foundAuthor = await Author
        .findOne(
            { email, password: encryptPassword },
            { _id: false, __v: false },
        );
        
    return foundAuthor as ILogin;
};

export default { find, login };
