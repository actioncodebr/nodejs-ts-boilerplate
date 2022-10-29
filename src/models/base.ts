import DB from '@db/index'

export class Base {
  schema = DB.manager.schema
  manager = DB.manager
}
