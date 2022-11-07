import { Request, Response } from "express";
import { Team } from "../entities/team"
import { teamModel } from "../models/teamModels";
import { badRequest, done, internalServerError, notFound, validateNumber } from "../services/util";

// Método para deletar um item pelo id passado pelo params, verificando se ele existe
const deleteTeamID = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  {
    if(!validateNumber(id))
      return badRequest(res, 'ID not found');

    const teamSaved = await teamModel.listTeamID(id);
    if(!teamSaved)
    return notFound(res);  
  }
  
  return teamModel.deleteTeamID(id)
  .then(() => done(res))
  .catch(err => internalServerError(res, err));
}


// Método para inserir um produto, fazendo primeiramente as validações
const insertTeam = (req: Request, res: Response) => {

  {
    const team = req.body;
    if(!team)
      return badRequest(res, "Invalid Team!");
    if(!team.name)
      return badRequest(res, "Please insert a team name");
  }
  const team = req.body as Team;
  return teamModel.insertTeam(team)
    .then(team => {
      res.json(team);
    })
    .catch(err => internalServerError(res, err));
}

// Mêtodo para listar todos os produtos em banco de dados
const listAllTeams = (req: Request, res: Response) => {
  return teamModel.listAllTeams()
  .then(teams => {
    res.json(teams);
  })
  .catch(err => internalServerError(res, err));
}
// Método para listar um item pelo id passado pelo params, verificando se ele existe
const listTeamID = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  {
    if(!validateNumber(id))
      return badRequest(res, 'Invalid ID')
  }
  
  return teamModel.listTeamID(id)
  .then((team) => {
    if(team)
      return res.json(team);
    else
      return notFound(res);
  })
  .catch(err => internalServerError(res, err));
}

export const teamController = { deleteTeamID, insertTeam, listAllTeams, listTeamID }