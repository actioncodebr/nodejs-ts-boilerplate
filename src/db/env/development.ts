import { Knex, knex } from 'knex'

const databaseName = `${process.env.DB_NAME}_dev`

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
  const db = knex({
    ...development,
  })

  await db.raw('DROP DATABASE ??', databaseName)
  await db.raw('CREATE DATABASE ??', databaseName)
})()
