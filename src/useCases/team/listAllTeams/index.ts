import { TeamsRepository } from "../../../modules/repositories/implementations/teamsRepository";
import { ListAllTeamsControllers } from "./listAllTeamsController";
import { ListAllTeamsUseCase } from "./listAllTeamsUseCase";

const teamsRepository = new TeamsRepository();
const listAllTeamsUseCase = new ListAllTeamsUseCase(teamsRepository);
export const listAllTeamsController = new ListAllTeamsControllers(listAllTeamsUseCase);