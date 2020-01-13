
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {
          id: 1,
          name: "James White",
          born: 1962,
          died: null,
          country: "USA"
        },
        {
          id: 2,
          name: "George Orwell",
          born: 1903,
          died: 1950,
          country: "England"
        },
        {
          id: 3,
          name: "Jane Austen",
          born: 1775,
          died: 1817,
          country: "England"
        },
        {
          id: 4,
          name: "Bill Bryson",
          born: 1951,
          died: null,
          country: "USA"
        },
        {
          id: 5,
          name: "Nathaniel Jeanson",
          born: 1976,
          died: null,
          country: "USA"
        },
        {
          id: 6,
          name: "Douglas Crockford",
          born: 1955,
          died: null,
          country: "USA"
        },
        {
          id: 7,
          name: "Gayle Laakmann McDowell",
          born: 1982,
          died: null,
          country: "USA"
        },
        {
          id: 8,
          name: "Anthony Burgess",
          born: 1917,
          died: 1993,
          country: "USA"
        },

      ]);
    });
};
