import logger from '@src/config/logger'
import db from '..'

export async function up(): Promise<void> {
  try {
    await db.manager.schema.createTable('users', (table) => {
      table.string('title')
      table.string('description')
    })
  } catch (err) {
    logger.error(err)
  }
}

export async function down(): Promise<void> {
  try {
    await db.manager.schema.dropTable('users')
  } catch (err) {
    logger.error(err)
  }
}
