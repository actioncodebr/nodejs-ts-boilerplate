import * as dotenv from 'dotenv'
import { Knex } from 'knex'
dotenv.config({ path: '../../../.env' })

export const development = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: `${process.env.DB_NAME}_dev`,
  } as Knex.Config,
}
