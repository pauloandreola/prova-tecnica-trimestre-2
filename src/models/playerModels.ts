import { dbQuery, dbQueryFirst } from "../services/db";
import { Player } from "../entities/player";

let data = [] as any;

// Método para deletar o item pelo id: que está no banco de dados
const deletePlayerID = async (id: number) => {
  await dbQueryFirst(`DELETE FROM player WHERE id = ?`, [id]);
}

// Método para inserir um item no banco de dados
const insertPlayer = async (player: Player) => {
  await dbQuery(`INSERT INTO player (team_id, name, age, position, goals) VALUES(?, ?, ?, ?, ?)`, [player.team_id, player.name, player.age, player.position, player.goals])
  data = await dbQuery(`SELECT seq As Id FROM sqlite_sequence WHERE name = 'player'`);
  return listPlayerID(data[0].Id);
}

// Método para listar todos os produtos que estão no banco de dados
const listAllPlayers = async () => {
 const data = await dbQuery(`SELECT * FROM  player`);
 return data as Player[];
}

// Método para listar o item pelo id: que está no banco de dados
const listPlayerID = async (id: number) => {
  const data = await dbQueryFirst(`SELECT * FROM  player WHERE id = ?`, [id]);
  return data as Player;
}

export const playerModel = { deletePlayerID, insertPlayer, listAllPlayers, listPlayerID }