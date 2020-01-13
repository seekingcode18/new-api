exports.up = function(knex, promise) {
  return knex.schema.createTable("authors", function(table) {
    table.increments();
    table.string("name").notNullable();
    table.integer("born").notNullable();
    table.integer("died");
    table.string("country");
  });
};

exports.down = function(knex, promise) {
  return knex.schema.dropTable("authors");
};
