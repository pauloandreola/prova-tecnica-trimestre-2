import { Request, Response } from "express";
import { CreateTeamUseCase } from "./createTeamUseCase";

export class CreateTeamController {
  constructor(private createTeamUseCase: CreateTeamUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const {name, coach, stadium, city} = req.body;
      await this.createTeamUseCase.execute({name, coach, stadium, city});
      return res.status(200).json()

    } catch (error) {
      return res.status(400).json(error);
    }
  }
}