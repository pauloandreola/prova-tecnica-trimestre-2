import { TeamsRepository } from "../../../repositories/implementations/teamsRepository";
import { DeleteTeamController } from "./deleteTeamController";
import { DeleteTeamUseCase } from "./deleteTeamUseCase";


const teamRepository = new TeamsRepository();
const deleteTeamUseCase = new DeleteTeamUseCase(teamRepository);
export const deleteTeamController = new DeleteTeamController(deleteTeamUseCase);