import { Knex, knex } from 'knex'
import loggerConfig from '@src/config/logger.config'
import { databaseConfig } from './config.db'

class DB {
  public manager: Knex

  constructor(config: { [key: string]: Knex.Config }) {
    this.manager = knex(config)
    loggerConfig.info(`config: ${config}`)
  }
}

export default new DB(databaseConfig).manager
