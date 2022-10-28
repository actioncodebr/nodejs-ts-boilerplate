import * as dotenv from 'dotenv'
dotenv.config()

import logger from '@src/config/logger'
import { Knex, knex } from 'knex'

const databaseName = `${process.env.DB_NAME}_test`

export const test = {
  client: 'pg',
  connection: {
    host: 'localhost',
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  } as Knex.Config,
}
;(async function main() {
  const db = knex({ ...test })
  try {
    await db.raw(`CREATE DATABASE ${databaseName};`)
  } catch (err) {
    if ((err as string).toString().match(/already exists/)) {
      return logger.info('DATABASE ALREADY EXISTS')
    }

    logger.error(err)
  }
})()
