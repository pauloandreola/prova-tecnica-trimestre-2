import { Team } from "../../entities/team";
import { ITeamsRepository } from "../ITeamsRepository";


export class TeamsRepository implements ITeamsRepository {
  deleteTeamID(Id: string): Promise<Team> {
    throw new Error("Method not implemented.");
  }
  insertTeam(data: ITeamsRepository): Promise<void> {
    throw new Error("Method not implemented.");
  }
  listAllTeams(): Promise<Team> {
    throw new Error("Method not implemented.");
  }
  listTeamID(id: string): Promise<Team> {
    throw new Error("Method not implemented.");
  }

}
