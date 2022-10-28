import DB from '@db/index'

export class Base {
  schema = DB.schema
  manager = DB
}
