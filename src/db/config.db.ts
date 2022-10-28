import type { Knex } from 'knex'
import * as CONFIG from './env'

export const databaseConfig: {
  [key: string]: Knex.Config
} = {
  development: CONFIG.development,
  test: CONFIG.test,
  staging: CONFIG.staging,
  production: CONFIG.production,
}

export default databaseConfig
