import { Router } from "express";

import RoomController from "../controllers/RoomController";

const roomRouter = Router();

roomRouter.post("/room", RoomController.create);

export default roomRouter;
