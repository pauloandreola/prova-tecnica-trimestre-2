import { Player } from "../../../modules/entities/player";
import { PlayersRepository } from "../../../modules/repositories/implementations/playersRepository";

export class ListAllPlayersUseCase {
  constructor(private playersRepository: PlayersRepository) {}
  
  async execute(): Promise<Player[]> {
    const teams = await this.playersRepository.listAllPlayers();

    if(!teams) {
        throw new Error("Empty list");
    }
    return teams;
  } 
}