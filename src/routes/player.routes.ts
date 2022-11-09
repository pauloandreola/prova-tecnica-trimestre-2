import { Router } from "express";
import { createPlayerController } from "../useCases/player/createPlayer";
import { deletePlayerController } from "../useCases/player/deletePlayer";
import { listAllPlayersController } from "../useCases/player/listAllPlayers";
import { listPlayerIDController } from "../useCases/player/listPlayerID";

// Abaixo as rotas - CRUD
export const playerRoutes = Router();

playerRoutes.delete('/:id', (req, res) => {
  return deletePlayerController.handle(req, res)
});
playerRoutes.get('/', (req, res) => {
  return listAllPlayersController.handle(req, res)
});
playerRoutes.get('/:id', (req, res) => {
  return listPlayerIDController.handle(req, res)
});
playerRoutes.post('/', (req, res) => {
  return createPlayerController.handle(req, res)
});