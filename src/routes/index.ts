import { Router } from "express";
import subjectRouter from "./Subject.routes";
import roomRouter from "./Room.routes";
import videoRouter from "./Video.routes";

const router = Router()

router.use(subjectRouter, roomRouter, videoRouter)

export default router