import { ICreatePlayerDTO } from "../../dtos/ICreatePlayerDTO";
import { Player } from "../entities/player";

export interface IPlayersRepository {
  deletePlayerID(id: string): Promise<void>;
  insertPlayer({name, team_id, age, position, goals}: ICreatePlayerDTO): Promise<void>;
  listAllPlayers(): Promise<Player[]>;
  listPlayerID(id: string): Promise<void>;
};