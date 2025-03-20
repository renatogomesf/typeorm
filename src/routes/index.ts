import { Router } from "express";
import subjectRouter from "./Subject.routes";

const router = Router()

router.use(subjectRouter)

export default router