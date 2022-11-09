import { Request, Response } from "express";
import { done } from "../../../services/util";
import { CreateTeamUseCase } from "./createTeamUseCase";

export class CreateTeamController {
  constructor(private createTeamUseCase: CreateTeamUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const {name, coach, stadium, city} = req.body;
      await this.createTeamUseCase.execute({name, coach, stadium, city});
      return done(res).json()

    } catch (error) {
      return res.status(400).json(error);
    }
  }
}