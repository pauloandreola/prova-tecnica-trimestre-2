import { ICreateTeamDTO } from "../../../dtos/ICreateTeamDTO";
import { Team } from "../../entities/team";
import { dbQuery, dbQueryFirst } from "../../../services/db";
import { ITeamsRepository } from "../ITeamsRepository";

let data = [] as any;

export class TeamsRepository implements ITeamsRepository {
 
  constructor() {}
  // Método para deletar um time pelo id: que está no banco de dados
  async deleteTeamID(id: string): Promise<void> {
    await dbQueryFirst(`DELETE * FROM team WHERE id = ?`, [id]);
  }

  // Método para inserir um time no banco de dados
  async insertTeam({name, coach, stadium, city}: ICreateTeamDTO): Promise<void> {
    await dbQuery(`INSERT INTO team (name, coach, stadium, city) VALUES(?, ?, ?, ?)`, [name, coach, stadium, city])
    data = await dbQuery(`SELECT seq As Id FROM sqlite_sequence WHERE name = 'team'`);
    return this.listTeamID(data[0].Id);
  }

  // Método para listar todos os times que estão no banco de dados
  async listAllTeams(): Promise<any> {
  const data = await dbQuery(`SELECT * FROM  team`);
  return data as Team[];
  }

  // Método para listar o time pelo id: que está no banco de dados
  async listTeamID(id: string): Promise<any> {
    const data = await dbQueryFirst(`SELECT * FROM  team WHERE id = ?`, [id]);
    return data as Team;
  }
}