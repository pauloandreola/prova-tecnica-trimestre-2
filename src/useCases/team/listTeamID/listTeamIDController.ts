import { Request, Response } from "express";
import { ListTeamIDUseCase } from "../listTeamID/listTeamIDUseCase";

export class ListTeamIDController {
  constructor(private listTeamIDUseCase: ListTeamIDUseCase) {}

  async handle(req: Request, res: Response): Promise<any> {

    try {
      const { id } = req.params;
      const team = await this.listTeamIDUseCase.execute(id);
      return res.json(team).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  } 
}