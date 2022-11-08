import { Team } from "../../../entities/team";
import { TeamsRepository } from "../../../repositories/implementations/teamsRepository";


export class ListAllTeamsUseCase {
  constructor(private teamsRepository: TeamsRepository) {}
  
  async execute(): Promise<Team[]> {
    const teams = await this.teamsRepository.listAllTeams();

    if(!teams) {
        throw new Error("Empty list");
    }
    return teams;
  }
}