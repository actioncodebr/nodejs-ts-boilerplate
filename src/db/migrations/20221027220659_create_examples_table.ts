import db from '..'

export async function up(): Promise<void> {
  db.schema.createTable('examples', (table) => {
    table.string('title')
    table.string('description')
  })
}

export async function down(): Promise<void> {
  db.schema.dropTable('examples')
}
