import { Application, Router } from "express";
import { playerRoutes } from "./player.routes";
import { teamRoutes } from "./team.routes";

export const useRoutes = (app: Application) => {
  const apiRouter = Router();
  apiRouter.use('/teams', teamRoutes);
  apiRouter.use('/players', playerRoutes);

  app.use('/api/v5', apiRouter);
}