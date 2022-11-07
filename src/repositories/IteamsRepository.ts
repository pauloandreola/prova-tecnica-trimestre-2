import { Team } from "../entities/team";


export interface ITeamsRepository {

  deleteTeamID(Id: string): Promise<Team>;
  insertTeam(data: ITeamsRepository): Promise<void>;
  listAllTeams(): Promise<Team>;
  listTeamID(id: string): Promise<Team>;
};