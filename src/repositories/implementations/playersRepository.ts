import { ICreatePlayerDTO } from "../../dtos/ICreatePlayerDTO";
import { IPlayersRepository } from "../IPlayersRepository";
import { Player } from "../../entities/player"

export class PlayersRepository implements IPlayersRepository {
  deletePlayerID(id: string): Promise<Player> {
    throw new Error("Method not implemented.");
  }
  insertPlayer(data: ICreatePlayerDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }
  listAllPlayers(data: ICreatePlayerDTO): Promise<Player> {
    throw new Error("Method not implemented.");
  }
  listPlayerID(id: string): Promise<Player> {
    throw new Error("Method not implemented.");
  }

}
