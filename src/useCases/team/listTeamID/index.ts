import { TeamsRepository } from "../../../modules/repositories/implementations/teamsRepository";
import { ListTeamIDController } from "./listTeamIDController";
import { ListTeamIDUseCase } from "./listTeamIDUseCase";

const teamsRepository = new TeamsRepository();
const listTeamIDUseCase = new ListTeamIDUseCase(teamsRepository);
export const listTeamIDController = new ListTeamIDController(listTeamIDUseCase);
