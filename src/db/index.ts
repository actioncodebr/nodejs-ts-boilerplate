import { Knex, knex } from 'knex'
import logger from '../config/logger.config'
import { databaseConfig } from './config.db'

class DB {
  public manager: Knex

  constructor(config: { [key: string]: Knex.Config }) {
    this.manager = knex({
      ...config,
      connection: {
        ...config.connection,
        database: `${process.env.DB_NAME}_dev`,
      },
    })
    logger.info(`config: ${config}`)
  }
}

export default new DB(databaseConfig).manager
