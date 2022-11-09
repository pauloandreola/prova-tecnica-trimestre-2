import { TeamsRepository } from "../../../repositories/implementations/teamsRepository";
import { CreateTeamController } from "./createTeamController";
import { CreateTeamUseCase } from "./createTeamUseCase";


const teamsRepository = new TeamsRepository();
const createTeamUseCase = new CreateTeamUseCase(teamsRepository);
export const createTeamController = new CreateTeamController(createTeamUseCase); 