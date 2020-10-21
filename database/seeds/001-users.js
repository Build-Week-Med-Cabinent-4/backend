
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_table').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user_table').insert([
        {id: 1, username: 'user1', password: 'password', email: "codyt@lambda.com"},
        {id: 2, username: 'user2', password: 'password', email: "codyt1@lambda.com"},
        {id: 3, username: 'user3', password: 'password', email: "codyt2@lambda.com"}
      ]);
    });
};