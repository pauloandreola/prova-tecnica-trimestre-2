import { ICreatePlayerDTO } from "../../../dtos/ICreatePlayerDTO";
import { IPlayersRepository } from "../IPlayersRepository";
import { Player } from "../../entities/player"
import { dbQuery, dbQueryFirst } from "../../../services/db";

let data = [] as any;

export class PlayersRepository implements IPlayersRepository {
  
  constructor() {}
  // Método para deletar um jogador pelo id: que está no banco de dados
  async deletePlayerID(id: string): Promise<void> {
      await dbQueryFirst(`DELETE FROM player WHERE id = ?`, [id]);
  }

  // Método para inserir um jogador no banco de dados
  async insertPlayer({name, team_id, age, position, goals}: ICreatePlayerDTO): Promise<void> {
    await dbQuery(`INSERT INTO player (name, team_id, age, position, goals) VALUES(?, ?, ?, ?, ?)`, [name, team_id, age, position, goals])
    data = await dbQuery(`SELECT seq As Id FROM sqlite_sequence WHERE name = 'player'`);
    return this.listPlayerID(data[0].Id);
  }
  
  // Método para listar todos os jogadores que estão no banco de dados
  async listAllPlayers(): Promise<any> {
    const data = await dbQuery(`SELECT * FROM  player`);
    return data as Player[];
  }

  // Método para listar o jogador pelo id: que está no banco de dados
  async listPlayerID(id: string): Promise<any> {
    const data = await dbQueryFirst(`SELECT * FROM  player WHERE id = ?`, [id]);
    return data as Player;
  }
}