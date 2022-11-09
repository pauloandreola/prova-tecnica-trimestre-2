import { ICreateTeamDTO } from "../dtos/ICreateTeamDTO";
import { Team } from "../entities/team";

export interface ITeamsRepository {
  deleteTeamID(id: string): Promise<void>;
  insertTeam({id, name, coach, stadium, city}: ICreateTeamDTO): Promise<void>;
  listAllTeams(): Promise<Team[]>;
  listTeamID(id: string): Promise<any>;
};