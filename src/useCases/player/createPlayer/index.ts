import { PlayersRepository } from "../../../modules/repositories/implementations/playersRepository";
import { CreatePlayerController } from "./createPlayerController";
import { CreatePlayerUseCase } from "./createPlayerUseCase";

const playersRepository = new PlayersRepository();
const createPlayerUseCase = new CreatePlayerUseCase(playersRepository);
export const createPlayerController = new CreatePlayerController(createPlayerUseCase);