import { PlayersRepository } from "../../../repositories/implementations/playersRepository";


export class DeletePlayerUseCase {
  constructor(private playersRepository: PlayersRepository) {}

  async execute(id: string): Promise<void> {
    const playerSaved = await this.playersRepository.listPlayerID(id);

    if(!playerSaved) {
      throw new Error("Players doesn't exists")
    }
  }
    this.playersRepository.deletePlayerID(id)
}