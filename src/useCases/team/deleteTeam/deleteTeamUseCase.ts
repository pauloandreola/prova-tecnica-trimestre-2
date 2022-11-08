import { TeamsRepository } from "../../../repositories/implementations/teamsRepository";


export class DeleteTeamUseCase {
  constructor(private teamsRepository: TeamsRepository) {}

  async execute(id: string): Promise<void> {
    
  }
}