import { Router } from "express";

const subjectRouter = Router();

subjectRouter.get("/", (req, res) => {
  res.status(200).send({ message: "tudo ok" });
});

export default subjectRouter;
