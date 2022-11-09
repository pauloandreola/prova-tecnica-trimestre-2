import { Request, Response } from "express";
import { CreatePlayerUseCase } from "./createPlayerUseCase";

export class CreatePlayerController {
  constructor(private createPlayerUseCase: CreatePlayerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response>{
    try {
      const {name, team_id, age, position, goals} = req.body;
      await this.createPlayerUseCase.execute({name, team_id, age, position, goals});
      return res.status(200).json();

    } catch (error) {
      return res.status(400).json(error);
    }
  }
}