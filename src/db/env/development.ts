import * as dotenv from 'dotenv'
dotenv.config()

import logger from '@src/config/logger'
import { Knex, knex } from 'knex'

const databaseName = `${process.env.DB_NAME}_development`

export const development = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  } as Knex.Config,
}
;(async function main() {
  if (process.env.NODE_ENV !== 'development') return
  const db = knex({ ...development })
  try {
    await db.raw(`CREATE DATABASE ${databaseName};`)
  } catch (err) {
    if ((err as string).toString().match(/already exists/)) {
      logger.info('RUNNING IN ENV: %o', process.env.NODE_ENV)
      return logger.info('DATABASE ALREADY EXISTS')
    }

    logger.error(err)
  }
})()
