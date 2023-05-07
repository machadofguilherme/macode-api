import dotenv from 'dotenv';

import ILoginBody from "../interfaces/ILoginBody";
import Author from "../models/AuthorSchema";
import { generatePassword } from "../utils/passwordOperations";
import { ILogin, ILoginError } from '../interfaces/ILogin';
import { tokenGenerate } from '../utils/tokenOperations';
import loginValidate from '../helpers/loginValidate';

dotenv.config();

const { PASSWORD } = process.env;

const login = (payload: object): object => {
    return { token: tokenGenerate(payload) };
};

const find = async (data: ILoginBody): Promise<ILogin | ILoginError> => {
    const checkLogin = loginValidate(data);
    
    if (checkLogin?.code === 400) {
        return checkLogin;
    }   

    const encryptPassword = generatePassword(String(PASSWORD));

    const foundAuthor = await Author
        .findOne(
            { email: data.email, password: encryptPassword },
            { _id: false, __v: false, password: false },
        );
        
    return foundAuthor as ILogin;
};

export default { find, login };
