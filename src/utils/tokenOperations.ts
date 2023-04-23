import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secret = String(process.env.SECRET);

const tokenGenerate = (payload: object) => {
    const token = jwt.sign(payload, secret, {
        algorithm: 'HS384',
        expiresIn: '2m'
    });

    return token;
};

export default tokenGenerate;
