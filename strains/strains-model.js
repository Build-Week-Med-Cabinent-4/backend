const db = require('../database/dbConfig');
module.exports = {
  getStrains,
  getStrainsById,
};

function getStrains() {
  return db('strains');
}

function getStrainsById(id) {
  return db('strains').where({ id }).first();
}
