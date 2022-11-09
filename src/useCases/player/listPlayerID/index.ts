import { PlayersRepository } from "../../../modules/repositories/implementations/playersRepository";
import { ListPlayerIDController } from "./listPlayerIDController";
import { ListPlayerIDUseCase } from "./listPlayerIDUseCase";

const playersRepository = new PlayersRepository();
const listPlayerIDUseCase = new ListPlayerIDUseCase(playersRepository);
export const listPlayerIDController = new ListPlayerIDController(listPlayerIDUseCase);