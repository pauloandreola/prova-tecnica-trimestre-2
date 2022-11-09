import { Router } from "express";
import { CreatePlayerController } from "../useCases/player/createPlayer/createPlayerController";
import { deletePlayerController } from "../useCases/player/deletePlayer";
import { listAllPlayersControllers } from "../useCases/player/lisAllPlayers";
import { ListPlayerIDController } from "../useCases/player/listPlayerID/listPlayerIDController";

// Abaixo as rotas - CRUD
export const playerRoutes = Router();

playerRoutes.delete('/:id', (req, res) => {
  return deletePlayerController.handle(req, res)
});
playerRoutes.get('/', (req, res) => {
  return listAllPlayersControllers.handle(req, res)
});
playerRoutes.get('/:id', (req, res) => {
  return ListPlayerIDController.handle(req, res)
});
playerRoutes.post('/', (req, res) => {
  return CreatePlayerController.handle(req, res)
});