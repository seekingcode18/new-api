exports.up = function(knex, promise) {
  return knex.schema.createTable("books", function(table) {
    table.increments();
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.integer("pub_year").notNullable();
    table.string("category").notNullable();
  });
};

exports.down = function(knex, promise) {
  return knex.schema.dropTable("books");
};
