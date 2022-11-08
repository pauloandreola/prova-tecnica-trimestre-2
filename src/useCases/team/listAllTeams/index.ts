import { TeamsRepository } from "../../../repositories/implementations/teamsRepository";
import { ListAllTeamsControllers } from "./ListAllTeamsController";
import { ListAllTeamsUseCase } from "./listAllTeamsUseCase";


const teamRepository = new TeamsRepository();
const listAllTeamsUseCase = new ListAllTeamsUseCase(teamRepository);
export const listAllTeamsControllers = new ListAllTeamsControllers(listAllTeamsUseCase);