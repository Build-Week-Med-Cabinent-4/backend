const db = require("../database/dbConfig");

module.exports ={
add,
find,
findBy,
findById,
remove
}

function find(){
    return db('user_table').select('id','username', 'password')
}
function findBy(filter){
    return db('user_table').where(filter).then(user => {return user})
}
async function add(user) {
    const [id] = await db('user_table').insert(user, 'id');
    return db('user_table').where({ id }).first();
  }
function findById(id){
    return db('user_table').where({id}).first();
}

function remove(id) {
    return db('user_table').where({ id }).del();
  }