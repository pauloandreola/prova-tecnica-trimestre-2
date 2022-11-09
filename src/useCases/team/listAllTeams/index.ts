import { TeamsRepository } from "../../../repositories/implementations/teamsRepository";
import { ListAllTeamsControllers } from "./ListAllTeamsController";
import { ListAllTeamsUseCase } from "./listAllTeamsUseCase";


const teamsRepository = new TeamsRepository();
const listAllTeamsUseCase = new ListAllTeamsUseCase(teamsRepository);
export const listAllTeamsControllers = new ListAllTeamsControllers(listAllTeamsUseCase);