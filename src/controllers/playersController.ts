import { Request, Response } from "express";
import { Player } from "../entities/player";
import { playerModel } from "../models/playerModels";
import { badRequest, done, internalServerError, notFound, validateNumber } from "../services/util";


//  Método para deletar um item pelo id passado pelo params, verificando se ele existe
const deletePlayerID = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  {

    if(!validateNumber(id))
      return badRequest(res, 'ID not found');

    const playerSaved = await playerModel.listPlayerID(id);
    if(!playerSaved)
    return notFound(res);  
  }
  
  return playerModel.deletePlayerID(id)
  .then(() => done(res))
  .catch(err => internalServerError(res, err));
}


// Método para inserir um produto, fazendo primeiramente as validações
const insertPlayer = (req: Request, res: Response) => {

  {
    const player = req.body;
    if(!player)
      return badRequest(res, "Invalid Player!");
    if(!player.name)
      return badRequest(res, "Please insert a product name");
  }
  const player = req.body as Player;
  return playerModel.insertPlayer(player)
    .then(player => {
      res.json(player);
    })
    .catch(err => internalServerError(res, err));
}

// Método para listar todos os produtos em banco de dados
const listAllPlayers = (req: Request, res: Response) => {
  return playerModel.listAllPlayers()
  .then(players => {
    res.json(players);
  })
  .catch(err => internalServerError(res, err));
}
//  Método para listar um item pelo id passado pelo params, verificando se ele existe
const listPlayerID = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  {
    if(!validateNumber(id))
      return badRequest(res, 'Invalid ID')
  }
  
  return playerModel.listPlayerID(id)
  .then((player) => {
    if(player)
      return res.json(player);
    else
      return notFound(res);
  })
  .catch(err => internalServerError(res, err));
}

export const playerController = { deletePlayerID, insertPlayer, listAllPlayers, listPlayerID }