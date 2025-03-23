import { Router } from "express";

import VideoController from "../controllers/VideoController";

const videoRouter = Router();

videoRouter.post("/video/:idRoom/create", VideoController.create);

export default videoRouter