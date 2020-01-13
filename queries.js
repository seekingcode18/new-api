const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: env.pg_usr,
    password: env.pg_pw,
    database: env.pg_db
  }
});

const books = (req, res) => {
  knex.select()
    .from('books')
    .then(response => res.send(response))
}