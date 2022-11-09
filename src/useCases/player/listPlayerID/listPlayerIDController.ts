import { Request, Response } from "express";
import { ListPlayerIDUseCase } from "./listPlayerIDUseCase";

export class ListPlayerIDController {
  constructor(private listPlayerIDUseCase: ListPlayerIDUseCase) {}

  async handle(req: Request, res: Response): Promise<any> {
  
    try {
      const { id } = req.params;
      const player = await this.listPlayerIDUseCase.execute(id);
      return res.json(player).status(200);
    } catch (error) {
      return res.json(error).status(500);
    }
  }
}