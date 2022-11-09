import { Request, Response } from "express";
import { ListAllTeamsUseCase } from "./listAllTeamsUseCase";

export class ListAllTeamsControllers {
  constructor(private listAllTeamsUseCase: ListAllTeamsUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const teams = await this.listAllTeamsUseCase.execute();
      return res.json(teams).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}