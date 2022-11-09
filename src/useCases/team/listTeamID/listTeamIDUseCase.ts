import { TeamsRepository } from "../../../repositories/implementations/teamsRepository";

export class ListTeamIDUseCase {
  constructor(private teamsRepository: TeamsRepository) {}
  
  async execute(id: string): Promise<any> {
    
    const team = await this.teamsRepository.listTeamID(id);
    {
      if(!team)
        throw new Error("Invalid team")
    }
      return team;
  }
}