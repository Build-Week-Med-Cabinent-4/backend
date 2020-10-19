const db = require('../database/dbConfig');
module.exports = {
    getUserResponse,
    getUserResponseById,
};

function getUserResponse() {
  return db('user_response');
}

function getUserResponseById(id) {
  return db('user_response').where({ id }).first();
}