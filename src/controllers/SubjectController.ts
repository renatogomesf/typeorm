import { Request, Response } from "express";
import { subjectRepository } from "../repositories/SubjectRepository";

class SubjectController {
  async create(request: Request, response: Response) {
    const { name, duration } = request.body;

    if (!name || !duration) {
      response.status(400).send({ message: "campo obrigatório vazio" });
    }

    try {
      // instancia a classe passando os parametros e retorna um objeto. (como toda classe instanciada... gerar objetos)
      const newSubject = subjectRepository.create({
        name,
      });

      // armazena as informações no banco de dados
      await subjectRepository.save(newSubject);

      response.status(201).send({ newSubject });
    } catch (error) {
      console.log(error);
      response.status(500).send({message: "Internal server error"})
    }
  }
}

export default new SubjectController();
