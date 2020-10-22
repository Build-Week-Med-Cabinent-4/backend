const db = require('../database/dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

async function add(strain) {
  const [id] = await db('strains_table').insert(strain, 'id');
  return db('strains_table').where({ id }).first();
}

function find() {
  return db('strains_table')
}

function findById(id) {
  return db('strains_table')
    .join('user_table', 'strains_table.user_id', '=', 'user_table.id')
    .where('strains_table.id', id)
    .select(
      'strains_table.id as strain_id',
      'strain',
      'type',
      'rating',
      'effects',
      'flavor',
      'description',
      'user_id'
    );
}

function update(changes, id) {
  return db('strains_table').where({ id }).update(changes);
}

async function remove(id) {
  return db('strains_table').where({ id }).del();
}
