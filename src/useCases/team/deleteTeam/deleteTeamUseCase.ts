import { TeamsRepository } from "../../../repositories/implementations/teamsRepository";

export class DeleteTeamUseCase {
  constructor(private teamsRepository: TeamsRepository) {}

  async execute(id: string): Promise<void> {
    const teamAlreadyExists = await this.teamsRepository.listTeamID(id);

    if(!teamAlreadyExists) {
      throw new Error("Team doesn't exists")
    }
  }
    this.teamsRepository.deletePlayerID(id);
}