import { request, response, Router } from "express";
import { playerController } from "../controllers/playersController";
import { CreatePlayerController } from "../useCases/player/createPlayer/createPlayerController";

// Abaixo as rotas - CRUD
export const playerRoutes = Router();

// const createPlayerController = new CreatePlayerController();

playerRoutes.delete('/:id', playerController.deletePlayerID);
playerRoutes.get('/', playerController.listAllPlayers);
playerRoutes.get('/:id', playerController.listPlayerID);
// playerRoutes.post('/', playerController.insertPlayer);
playerRoutes.post('/', (req, res) => {
  return CreatePlayerController.handle(req, res)});

// export { playerRoutes };