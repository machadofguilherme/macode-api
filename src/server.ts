import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import dbConnect from "./database/connection";
import Author from "./models/AuthorSchema";
import { generatePassword } from "./utils/passwordOperations";

import loginRouter from "./routes/LoginRouter";
import checkRouter from "./routes/CheckRouter";
import postRouter from "./routes/PostRouter";
import tagRouter from "./routes/TagRouter";

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
app.use(postRouter.post);
app.use(tagRouter.tag);

const dbPopulate = async () => {
    await Author.collection.drop();

    await new Author({
        author: "Guilherme Machado",
        email: "machadofguilherme@proton.me",
        password: encryptedPassword,
    }).save();
};

dbConnect();
dbPopulate();

app.listen(PORT, () => console.log("Rodando..."));
