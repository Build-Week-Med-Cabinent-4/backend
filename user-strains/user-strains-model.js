const db = require('../database/dbConfig');

module.exports = {
    add,
    find,
    findById,
    remove
};

// =========== GET User_strain ===========
function find() {
    return db('user_strains')
};

// =========== GET User_strain by id ===========
function findById(id) {
    return db('user_strains').where({ id }).first();
};

// =========== POST User_strain ===========
function add(user_strains) {
    return db('user_strains').then(([id]) => {
        return findById(id);
    });
}

// =========== DELETE Response ===========
function remove(id) {
    return db('user_strains')
            .where({ id })
            .del()
};