import { Knex, knex } from 'knex'
import logger from '@config/logger'
import { databaseConfig } from './config.db'

class DB {
  public manager: Knex

  constructor(config: { [key: string]: Knex.Config }) {
    const configByEnv = config[process.env.NODE_ENV || 'production']
    const conn = {
      ...configByEnv,
      connection: {
        ...config.connection,
        database: `${process.env.DB_NAME}_dev`,
      },
    }

    this.manager = knex(conn)

    logger.info('CONNECTED TO DATABASE')
  }
}

export default new DB(databaseConfig).manager
