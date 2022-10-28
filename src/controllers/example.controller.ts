import { IController } from '@src/@types/controllers'
import { Example } from '@src/models'
import { Request, Response, Router } from 'express'

export class ExampleController implements IController {
  public path = '/examples'
  public router = Router()

  constructor() {
    this.initializeRoutes()
  }

  public initializeRoutes() {
    this.router.get(this.path, this.handleGet)
    this.router.post(this.path, this.handlePost)
  }

  public async handlePost(req: Request, res: Response) {
    const vals = await Example.save({
      title: req.body.title,
      description: req.body.description,
    })

    return res.json({ hello: 'world', vals: vals })
  }

  public async handleGet(_req: Request, res: Response) {
    const vals = await Example.getAll()

    return res.json({ hello: 'world', vals: vals })
  }
}
