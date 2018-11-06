
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cities', function(table) {
    table.increments();
    table.string('name').notNullable();
    table.integer('state_id').unsigned().references('id').inTable('states');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cities');
};
