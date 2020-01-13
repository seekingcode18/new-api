const env = require('dotenv').config().parsed;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      user: env.pg_usr,
      password: env.pg_pw,
      database: env.pg_db
    },
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds/development"
    }
  }
};
