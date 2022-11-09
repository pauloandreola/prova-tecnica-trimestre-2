import { PlayersRepository } from "../../../repositories/implementations/playersRepository";
import { DeletePlayerController } from "./deletePlayerController";
import { DeletePlayerUseCase } from "./deletePlayerUseCase";

const playersRepository = new PlayersRepository();
const deletePlayerUseCase = new DeletePlayerUseCase(playersRepository);
export const deletePlayerController = new DeletePlayerController(deletePlayerUseCase);