import { Router } from "express";
import { createTeamController } from "../useCases/team/createTeam";
import { deleteTeamController } from "../useCases/team/deleteTeam";
import { listAllTeamsController } from "../useCases/team/listAllTeams";
import { listTeamIDController } from "../useCases/team/listTeamID";

// Abaixo as rotas - CRUD
export const teamRoutes = Router();

teamRoutes.delete('/:id', (req, res) => {
  return deleteTeamController.handle(req, res)
});
teamRoutes.get('/', (req, res) => {
  return listAllTeamsController.handle(req, res)
});
teamRoutes.get('/:id', (req, res) => {
  return listTeamIDController.handle(req, res)
});
teamRoutes.post('/', (req, res) => {
  return createTeamController.handle(req, res)
});