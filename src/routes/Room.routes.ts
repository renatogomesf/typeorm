import { Router } from "express";

import RoomController from "../controllers/RoomController";

const roomRouter = Router();

roomRouter.get("/room", RoomController.list);
roomRouter.post("/room", RoomController.create);
roomRouter.post("/room/:idRoom/subjects", RoomController.roomSubject);

export default roomRouter;
