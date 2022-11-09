import { Request, Response } from "express";
import { DeleteTeamUseCase } from "./deleteTeamUseCase";

export class DeleteTeamController {
  constructor(private deleteTeamUseCase: DeleteTeamUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.deleteTeamUseCase.execute(id);
      return res.status(200).json();
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}