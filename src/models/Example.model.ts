import { Base } from '@models/base'
import logger from '@src/config/logger'

type ParamsType = {
  title: string
  description: string
}

const tableName = 'examples'

export class Example extends Base {
  static async save(params: ParamsType) {
    try {
      return await Example.repo(tableName).insert(params).returning('*')
    } catch (err) {
      logger.error('%o', err)
    }
  }

  static async all() {
    return await Example.repo(tableName).select('*')
  }
}
