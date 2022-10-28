import { Base } from '@models/base'
import logger from '@src/config/logger'

type ParamsType = {
  title: string
  description: string
}

export class Example extends Base {
  tableName = 'examples'

  static async save(params: ParamsType) {
    const model = new Example()

    return await model.save(params)
  }

  async save(params: ParamsType) {
    try {
      return await this.manager(this.tableName).insert(params).returning('*')
    } catch (err) {
      logger.error('%o', err)
    }
  }

  static async getAll() {
    const model = new Example()

    return await model.entities()
  }

  async entities() {
    try {
      return await this.manager(this.tableName).select('*')
    } catch (err) {
      logger.error('%o', err)
    }
  }
}
