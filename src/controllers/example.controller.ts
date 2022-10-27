import { IController } from '@src/@types/controllers'
import logger from '@src/config/logger'
import { Request, Response, Router } from 'express'

export class ExampleController implements IController {
  public path = '/examples'
  public router = Router()

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.get(this.path, this.handleRoute)
  }

  public handleRoute(req: Request, res: Response) {
    logger.info(req.params)

    return res.json({ hello: 'world' })
  }
}
