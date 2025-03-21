import { Request, Response } from "express";
import { roomRepository } from "../repositories/RoomRepository";

class RoomController {
  async create(request: Request, response: Response) {
    const { name, description } = request.body;

    try {
      const newRoom = roomRepository.create({
        name,
        description,
      });

      await roomRepository.save(newRoom);

      response.status(201).send({ newRoom });
    } catch (error) {
      console.log(error);
      response.status(500).send({ message: "Internal server error" });
    }
  }
}

export default new RoomController();
