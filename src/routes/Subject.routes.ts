import { Router } from "express";

import SubjectController from "../controllers/SubjectController";

const subjectRouter = Router();

subjectRouter.post("/subject", SubjectController.create);

export default subjectRouter;
