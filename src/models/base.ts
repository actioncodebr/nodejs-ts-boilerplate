import DB from '@db/index'
import { Knex } from 'knex'

export class Base {
  static schema = DB.manager.schema
  static repo: Knex = DB.manager
}
