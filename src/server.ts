import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import dbConnect from "./database.ts/connection";
import Author from "./models/AuthorSchema";
import { generatePassword } from "./utils/passwordOperations";
import loginRouter from "./routes/LoginRouter";
import checkRouter from "./routes/CheckRouter";

dotenv.config();
const { PORT, PASSWORD } = process.env;

const password = String(PASSWORD);
const encryptedPassword = generatePassword(password);
const app = express();

app.use(express.json());
app.use('/static', express.static(__dirname + '/public'));
app.use(cors());
app.use(loginRouter.login);
app.use(checkRouter.check);

const dbPopulate = () => {
    Author.collection.drop();

    new Author({
        author: "Guilherme Machado",
        email: "machadofguilherme@proton.me",
        password: encryptedPassword,
    }).save();
};

dbConnect();
dbPopulate();

app.listen(PORT, () => console.log("Rodando..."));
