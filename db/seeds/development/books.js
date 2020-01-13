
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("books").del()
    .then(function () {
      // Inserts seed entries
      return knex("books").insert([{
        id: 1,
        title: "1984",
        author: "George Orwell",
        pub_year: 1949,
        pages: 237,
        rating: 5,
        category: "dystopia"
      },
      {
        id: 2,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        pub_year: 1813,
        pages: 279,
        rating: 9,
        category: "romance"
      },
      {
        id: 3,
        title: "A Short History of Nearly Everything",
        author: "Bill Bryson",
        pub_year: 2003,
        pages: 544,
        rating: 6,
        category: "science"
      },
      {
        id: 4,
        title: "Emma",
        author: "Jane Austen",
        pub_year: 1815,
        pages: 474,
        rating: 6,
        category: "romance"
      },
      {
        id: 5,
        title: "Replacing Darwin",
        author: "Nathaniel Jeanson",
        pub_year: 2017,
        pages: 336,
        rating: 8,
        category: "science"
      },
      {
        id: 6,
        title: "The Forgotten Trinity",
        author: "James White",
        pub_year: 1998,
        pages: 224,
        rating: 8,
        category: "theology"
      },
      {
        id: 7,
        title: "JavaScript: The Good Parts",
        author: "Douglas Crockford",
        pub_year: 2008,
        pages: 153,
        rating: 9,
        category: "technology"
      },
      {
        id: 8,
        title: "The Potter's Freedom",
        author: "James White",
        pub_year: 2000,
        pages: 358,
        rating: 7,
        category: "theology"
      },
      {
        id: 9,
        title: "Hallelujah Junction: Composing an American Life",
        author: "John Adams",
        pub_year: 2000,
        pages: 340,
        rating: 7,
        category: "biography"
      },
      {
        id: 10,
        title: "A CLockwork Orange",
        author: "Anthony Burgess",
        pub_year: 1962,
        pages: 240,
        rating: 5,
        category: "dystopia"
      },
      {
        id: 11,
        title: "The Doctor is Sick",
        author: "Anthony Burgess",
        pub_year: 1960,
        pages: 260,
        rating: 6,
        category: "novel"
      },
      {
        id: 12,
        title: "Cracking the Coding Interview",
        author: "Gayle Laakmann McDowell",
        pub_year: 2008,
        pages: 500,
        rating: 8,
        category: "technology"
      }]);
    });
};
