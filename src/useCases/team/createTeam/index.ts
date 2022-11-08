import { TeamsRepository } from "../../../repositories/implementations/teamsRepository";
import { CreateTeamController } from "./createTeamController";
import { CreateTeamUseCase } from "./createTeamUseCase";


const teamRepository = new TeamsRepository();
const createTeamUseCase = new CreateTeamUseCase(teamRepository);
export const createTeamController = new CreateTeamController(createTeamUseCase); 