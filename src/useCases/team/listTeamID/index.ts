import { TeamsRepository } from "../../../repositories/implementations/teamsRepository";
import { ListTeamIDController } from "./listTeamIDController";
import { ListTeamIDUseCase } from "./listTeamIDUseCase";


const teamRepository = new TeamsRepository();
const listTeamIDUseCase = new ListTeamIDUseCase(teamRepository);
export const listTeamIDController = new ListTeamIDController(listTeamIDUseCase);
