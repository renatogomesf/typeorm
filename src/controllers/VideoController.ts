import { Request, Response } from "express";
import { videoRepository } from "../repositories/VideoRepository";
import { roomRepository } from "../repositories/RoomRepository";

class VideoController {
  async create(request: Request, response: Response): Promise<Response | any> {
    const { title, url } = request.body;
    const { idRoom } = request.params;

    try {
      const room = await roomRepository.findOneBy({ id: Number(idRoom) });

      if (!room) {
        return response.status(404).send({ message: "No Room" });
      }

      const newVideo = videoRepository.create({
        title,
        url,
        room,
      });

      await videoRepository.save(newVideo);

      return response.status(201).send({ newVideo });
    } catch (error) {
      console.log(error);

      return response.status(500).send({ message: "Internal server error" });
    }
  }
}

export default new VideoController();
