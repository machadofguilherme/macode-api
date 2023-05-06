import { Router } from "express";

import checkController from "../controller/CheckController";
import validateCheckBody from "../middleware/validateCheckBody";

const check = Router();

check.post("/check", validateCheckBody.check, checkController.tokenChecker);

export default { check };
