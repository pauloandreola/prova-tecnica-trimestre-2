import { dbQuery, dbQueryFirst } from "../services/db";
import { Team } from "../entities/team";

let data = [] as any;

// Método para deletar o item pelo id: que está no banco de dados
const deleteTeamID = async (id: number) => {
  await dbQueryFirst(`DELETE FROM team WHERE id = ?`, [id]);
}

// Método para inserir um item no banco de dados
const insertTeam = async (team: Team) => {
  await dbQuery(`INSERT INTO team (name, coach, stadium, city) VALUES(?, ?, ?, ?)`, [team.name, team.coach, team.stadium, team.city])
  data = await dbQuery(`SELECT seq As Id FROM sqlite_sequence WHERE name = 'team'`);
  return listTeamID(data[0].Id);
}

// Método para listar todos os produtos que estão no banco de dados
const listAllTeams = async () => {
 const data = await dbQuery(`SELECT * FROM  team`);
 return data as Team[];
}

// Método para listar o item pelo id: que está no banco de dados
const listTeamID = async (id: number) => {
  const data = await dbQueryFirst(`SELECT * FROM  team WHERE id = ?`, [id]);
  return data as Team;
}

export const teamModel = { deleteTeamID, insertTeam, listAllTeams, listTeamID }