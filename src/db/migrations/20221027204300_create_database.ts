import { Knex } from 'knex'
import database from '..'

export async function up(db: Knex): Promise<void> {
  database
    .raw('CREATE DATABASE DB_NAME;')
    .catch(() => 'Error trying to create database')
    .finally(function () {
      console.log('Done')
    })
}

export async function down(db: Knex): Promise<void> {
  database
    .raw('DROP DATABASE DB_NAME;')
    .catch(() => 'Error trying to create database')
    .finally(function () {
      console.log('Done')
    })
}
