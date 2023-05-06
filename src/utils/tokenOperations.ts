import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ErrorCallback } from 'typescript';

dotenv.config();

const secret = String(process.env.SECRET);

export const tokenGenerate = (payload: object) => {
    const token = jwt.sign(payload, secret, {
        algorithm: 'HS384',
        expiresIn: '30m'
    });

    return token;
};

export const tokenValidate = (receivedToken: string) => {
    try {
        const token = jwt.verify(receivedToken, secret);
        return token;
    } catch (error) {
        return false;
    }
};
