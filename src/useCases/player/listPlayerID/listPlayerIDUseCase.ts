import { PlayersRepository } from "../../../modules/repositories/implementations/playersRepository";

export class ListPlayerIDUseCase {
  constructor(private playersRepository: PlayersRepository) {}

  async execute(id: string): Promise<any> {

    const player = await this.playersRepository.listPlayerID(id);
    {
      if(!player)
        throw new Error("Invalid Player")
    }
      return player;
  }
}