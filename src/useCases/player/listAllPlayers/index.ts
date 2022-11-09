import { PlayersRepository } from "../../../modules/repositories/implementations/playersRepository";
import { ListAllPlayersController } from "./listAllPlayersController";
import { ListAllPlayersUseCase } from "./listAllPlayersUseCase";

const playersRepository = new PlayersRepository();
const listAllPlayersUseCase = new ListAllPlayersUseCase(playersRepository);
export const listAllPlayersController = new ListAllPlayersController(listAllPlayersUseCase);