import { Request, Response } from "express";
import { roomRepository } from "../repositories/RoomRepository";
import { subjectRepository } from "../repositories/SubjectRepository";
import { AppDataSource } from "../data-source";
import { Room } from "../entities/Room";

class RoomController {
  async create(request: Request, response: Response): Promise<Response | any> {
    const { name, description } = request.body;

    try {
      const newRoom = roomRepository.create({
        name,
        description,
      });

      await roomRepository.save(newRoom);

      return response.status(201).send({ newRoom });
    } catch (error) {
      console.log(error);
      return response.status(500).send({ message: "Internal server error" });
    }
  }

  async roomSubject(
    request: Request,
    response: Response
  ): Promise<Response | any> {
    const { subject_id } = request.body;
    const { idRoom } = request.params;

    try {
      const room = await roomRepository.findOneBy({ id: Number(idRoom) });

      if (!room) {
        return response.status(404).send({ message: "No Room" });
      }

      const subject = await subjectRepository.findOneBy({
        id: Number(subject_id),
      });

      if (!subject) {
        return response.status(404).send({ message: "No Subject" });
      }

      await AppDataSource.createQueryBuilder()
        .relation(Room, "subjects")
        .of(room)
        .add(subject);

      const roomUpdate = await roomRepository.find({
        where: { id: room.id },
        relations: {
          subjects: true,
        },
      });

      await roomRepository.save(roomUpdate);

      return response.status(200).send(room);
    } catch (error) {
      console.log(error);

      return response.status(500).send({ message: "Internal server error" });
    }
  }

  async list(request: Request, response: Response): Promise<Response | any> {
    try {
      const rooms = await roomRepository.find({
        relations: {
          subjects: true,
        },
      });

      return response.status(200).send(rooms);
    } catch (error) {
      console.log(error);

      return response.status(500).send({ message: "Internal server error" });
    }
  }
}

export default new RoomController();
