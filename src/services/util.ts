import { Response } from "express"

// Função para verificar/informar uma problema de requisição/bad request
export const badRequest = (res: Response, err: string) => {
  res.status(400).json({err})
}

// Função para verificar/informar um problema interno no servidor/internal server error
export const internalServerError = (res: Response, err: Error ) => {
  res.status(500).json({err: err.message})
}

//  Função para informar que item não foi encontrado/not found
export const notFound = (res: Response) => res.sendStatus(404);

//  Função para informar que operação aconteceu com sucesso/ done
export const done = (res: Response) => res.sendStatus(200);

//  Função para verificar se o valor é válido/validate number
export const validateNumber = (num: any) => parseFloat(num) > 0

