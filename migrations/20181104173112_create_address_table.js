
exports.up = function(knex, Promise) {
  return knex.schema.createTable('address', function(table) {
    table.increments();
    table.string('street').notNullable();
    table.string('number').notNullable();
    table.string('zipcode').notNullable();
    table.integer('user_id').unsigned().unique().references('id').inTable('users');
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('address');
};
