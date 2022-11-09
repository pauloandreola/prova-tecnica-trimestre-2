import { ICreateTeamDTO } from "../../../dtos/ICreateTeamDTO";
import { TeamsRepository } from "../../../modules/repositories/implementations/teamsRepository";

export class CreateTeamUseCase {
  constructor(private teamsRepository: TeamsRepository) {}

  async execute({name, coach, stadium, city}: ICreateTeamDTO): Promise<void> {
    try {
      await this.teamsRepository.insertTeam({name, coach, stadium, city})
    } catch (error) {
      throw new Error();
    }
  }
}