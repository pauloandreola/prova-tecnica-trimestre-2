import { Router } from "express";
import { teamController } from "../controllers/teamsController";

// Abaixo as rotas - CRUD
const teamRoutes = Router();

teamRoutes.delete('/:id', teamController.deleteTeamID);
teamRoutes.get('/', teamController.listAllTeams);
teamRoutes.get('/:id', teamController.listTeamID);
teamRoutes.post('/', teamController.insertTeam);

export { teamRoutes };