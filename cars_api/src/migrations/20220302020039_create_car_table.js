/**
 * Create table_name table
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.createTable('cars', (table) => {
    table.increments('id').primary().unsigned();
    table.integer('manufacture_id').references('id').inTable('manufactures').notNull();
    table.string('model', 20).unique().notNull();
    table.integer('horsepower').default(1000).notNull();
    table.timestamp('created_at').default(knex.fn.now()).notNull();

  });
}

/**
 * Drop table_name cars
 *
 * @param { Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.dropTable('cars');
}