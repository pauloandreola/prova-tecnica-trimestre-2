import { ICreatePlayerDTO } from "../../../dtos/ICreatePlayerDTO";
import { IPlayersRepository } from "../../../repositories/IPlayersRepository";

export class CreatePlayerUseCase {

  constructor(private playersRepository: IPlayersRepository) {}

  async execute({name,team_id, age, position, goals}: ICreatePlayerDTO): Promise<void> {

    const playerAlreadyExists = await this.playersRepository.listPlayerID(name);

    if (playerAlreadyExists) {
      throw new Error("User already exists");
    }

    await this.playersRepository.insertPlayer({
      name,
      team_id,
      age,
      position,
      goals
    });
  }
}