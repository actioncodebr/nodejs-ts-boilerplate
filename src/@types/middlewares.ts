import { NextFunction, Request, Response } from 'express'

export interface IMiddleware {
  init: (req: Request, res: Response, next: NextFunction) => void
}
