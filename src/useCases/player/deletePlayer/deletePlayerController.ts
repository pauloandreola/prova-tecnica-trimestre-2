import { Request, Response } from "express";
import { DeletePlayerUseCase } from "./deletePlayerUseCase";


export class DeletePlayerController {
  constructor(private deletePlayerUseCase: DeletePlayerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params as any;
      await this.deletePlayerUseCase.execute(id);
      return res.status(200).json();
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}