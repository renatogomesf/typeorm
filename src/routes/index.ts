import { Router } from "express";
import subjectRouter from "./Subject.routes";
import roomRouter from "./Room.routes";

const router = Router()

router.use(subjectRouter, roomRouter)

export default router