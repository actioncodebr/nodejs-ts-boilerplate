import { Knex, knex } from 'knex'
import { databaseConfig } from './config.db'

class DB {
  public manager: Knex
  public env: string
  public config: Knex.Config
  public conn: Knex.Config

  constructor(config: { [key: string]: Knex.Config }) {
    this.env = process.env.NODE_ENV || 'development'
    this.config = config[this.env]

    this.conn = {
      ...this.config,
      connection: {
        ...(this.config.connection as object),
        database: `${process.env.DB_NAME}_${this.env}`,
      },
    }
    console.log({ nodeEnv: process.env.NODE_ENV, conn: this.conn })

    this.manager = knex(this.conn)
  }
}

export default new DB(databaseConfig)
