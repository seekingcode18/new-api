const express = require('express');
const app = express();
const port = 4000;
const env = require('dotenv').config().parsed;
// const db = require('queries');

// setup Handlebars
// const template = Handlebars.compile()
const Handlebars = require("express-handlebars");
app.engine('handlebars', Handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/', express.static('views'));
app.use('/', express.static('public'));

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: env.pg_usr,
    password: env.pg_pw,
    database: env.pg_db
  }
});

app.get('/', (req, res) => res.render('index'));

app.get('/api/v1/books', (req, res) => {
  knex('books').select()
    .then(data => res.send(data))
});

app.get('/api/v1/book/:id', (req, res) => {
  knex('books').select().where('id', req.params.id)
    .then(data => res.send(data))
});

app.get('/api/v1/authors', (req, res) => {
  knex('authors').select()
  .then(data => res.send(data))
});

app.get('/api/v1/author/:id', (req, res) => {
  knex('authors').select().where('id', req.params.id)
    .then(data => res.send(data))
});

app.get('/api/v1/join', (req, res) => {
  knex('books').select()
    .join('authors', 'books.author', '=', 'authors.name')
    .then(data => res.send(data))
});

app.get('/api/v1/inner', (req, res) => {
  knex('books').select('books.id as book_id', 'title', 'author', 'pub_year', 'rating', 'country')
    .innerJoin('authors', 'books.author', 'authors.name')
    .where('authors.born', '>', 1965)
    .then(data => res.send(data))
});

app.get('/api/v1/addBook', (req, res) => {
  knex('books').insert([
    {
      id: 13,
      title: "TEST BOOK",
      author: "Anonymous",
      pub_year: 2020,
      pages: 220,
      rating: 10,
      category: "novel"
    }
])
.then(data => res.send('Book added'))
})

app.listen(port, () => console.log(`Listening on port ${port}`));
