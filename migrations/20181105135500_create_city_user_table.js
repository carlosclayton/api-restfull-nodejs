
exports.up = function(knex, Promise) {
  return knex.schema.createTable('city_user', function(table) {
    table.integer('city_id').unsigned().references('id').inTable('cities');
    table.integer('user_id').unsigned().references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('city_user');
};
