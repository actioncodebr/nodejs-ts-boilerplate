import { NextFunction, Request, Response } from 'express'
import { IMiddleware } from '@src/@types/middlewares'
import logger from '@src/config/logger'

export class LogMiddleware implements IMiddleware {
  init(req: Request, _res: Response, next: NextFunction) {
    logger.info('logging vindo do middleware')
    logger.info('body: %o', req.body)
    logger.info('params: %o', req.params)
    logger.info('headers: %o', req.headers)

    next()
  }
}
