import { Router } from "express";

import loginController from "../controller/LoginController";
import validateLoginBody from "../middleware/validateLoginBody";

const login = Router();

login.post("/login", validateLoginBody.check, loginController.login);

export default { login };
