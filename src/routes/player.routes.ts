import { Router } from "express";
import { playerController } from "../controllers/playersController";

// Abaixo as rotas - CRUD
const playerRoutes = Router();

playerRoutes.delete('/:id', playerController.deletePlayerID);
playerRoutes.get('/', playerController.listAllPlayers);
playerRoutes.get('/:id', playerController.listPlayerID);
playerRoutes.post('/', playerController.insertPlayer);

export { playerRoutes };