import { ICreatePlayerDTO } from "../dtos/ICreatePlayerDTO";
import { Player } from "../entities/player";


export interface IPlayersRepository {
  deletePlayerID(id: string): Promise<Player>;
  insertPlayer(data: ICreatePlayerDTO): Promise<void>;
  listAllPlayers(): Promise<Player[]>;
  listPlayerID(id: string): Promise<Player>;
};