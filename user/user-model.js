const db = require("../database/dbConfig");

module.exports ={
add,
find,
findBy,
findById,
findUserStrain,
remove
}

function find(){
    return db('user_table').select('id','username', 'password')
}
function findBy(filter){
    return db('user_table').where(filter);
  }
async function add(user) {
    const [id] = await db('user_table').insert(user, 'id');
    return db('user_table').where({ id }).first();
  }
function findById(id){
    return db('user_table').where({id}).first();
}

function findUserStrain(id) {
    return db('user_table')
      .join('strains_table', 'strains_table.user_id', '=', 'user_table.id')
      .where('strains_table.user_id', id)
      .select(
        'user_id',
        'strains_table.id as strain_id',
        'strain',
        'type',
        'rating',
        'effects',
        'flavor',
        'description'
      );
}

function remove(id) {
    return db('user_table').where({ id }).del();
  }