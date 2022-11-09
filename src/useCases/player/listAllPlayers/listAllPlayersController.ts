import { Request, Response } from "express";
import { ListAllPlayersUseCase } from "./listAllPlayersUseCase";

export class ListAllPlayersController {
  constructor(private listAllPlayersUseCase: ListAllPlayersUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const teams = await this.listAllPlayersUseCase.execute();
      return res.json(teams).status(200);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}  