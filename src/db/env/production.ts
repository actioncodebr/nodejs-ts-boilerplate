import * as dotenv from 'dotenv'
dotenv.config()

import logger from '@src/config/logger'
import { Knex, knex } from 'knex'

const databaseName = `${process.env.DB_NAME}_production`

const connection =
  process.env.DATABASE_URL ||
  ({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  } as Knex.Config)

export const production = {
  client: 'pg',
  connection,
}
;(async function main() {
  if (process.env.NODE_ENV !== 'production') return

  const db = knex({ ...production })
  try {
    await db.raw(`CREATE DATABASE ${databaseName};`)
  } catch (err) {
    if ((err as string).toString().match(/already exists/)) {
      logger.info('RUNNING IN ENV: PRODUCTION == %o', process.env.NODE_ENV)
      return logger.info('DATABASE ALREADY EXISTS')
    }

    logger.error(err)
  }
})()
