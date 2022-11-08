import { ICreatePlayerDTO } from "../../dtos/ICreatePlayerDTO";
import { IPlayersRepository } from "../IPlayersRepository";
import { Player } from "../../entities/player"
import { playerModel } from "../../models/playerModels";

export class PlayersRepository implements IPlayersRepository {
  
  deletePlayerID(id: string): Promise<Player> {
    throw new Error("Method not implemented.");
  }
  async insertPlayer({name, team_id, age, position, goals}: ICreatePlayerDTO): Promise<void> {
    const player = ({
      name,
      team_id,
      age,
      position,
      goals
    });

    await playerModel.insertPlayer(player);
  }
  listAllPlayers(): Promise<Player[]> {
    throw new Error("Method not implemented.");
  }
  listPlayerID(id: string): Promise<Player> {
    throw new Error("Method not implemented.");
  }

}
