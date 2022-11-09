import { TeamsRepository } from "../../../modules/repositories/implementations/teamsRepository";
import { DeleteTeamController } from "./deleteTeamController";
import { DeleteTeamUseCase } from "./deleteTeamUseCase";

const teamsRepository = new TeamsRepository();
const deleteTeamUseCase = new DeleteTeamUseCase(teamsRepository);
export const deleteTeamController = new DeleteTeamController(deleteTeamUseCase);