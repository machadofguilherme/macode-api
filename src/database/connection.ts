import {connect} from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGO_URI } = process.env;

const dbConnect = () => connect(String(MONGO_URI))
    .then(() => console.log('Banco de dados conectado!'));

export default dbConnect;