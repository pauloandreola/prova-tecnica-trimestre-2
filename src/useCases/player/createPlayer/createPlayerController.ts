import { Request, Response } from "express";
import { container } from "tsrynge";
import { CreatePlayerUseCase } from "./createPlayerUseCase";

export class CreatePlayerController {

  constructor(private createPlayerUseCase: CreatePlayerUseCase) {}

  handle(req: Request, res: Response): Response{
    const {name, team_id, age, position, goals} = req.body;
    // const createPlayerUseCase = container.resolve(CreatePlayerUseCase);
    this.createPlayerUseCase.execute({name, team_id, age, position, goals});

    return res.status(201).json();
  }
}