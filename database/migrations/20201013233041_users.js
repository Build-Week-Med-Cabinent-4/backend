
exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
      users.increments();
  
      users.string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255)
        .notNullable();
      users.string('email', 255)
        .notNullable()
        .unique();
    })

    .createTable('user_response', saved => {
      saved.increments();
  
      saved.integer('user_id')
        .notNullable()
        .unique()
        .references('users.id');
      saved.integer('strain_id')
        .notNullable()
        .unique()
        .references('strains.id');
      saved.string('ailment');
    })
    
    .createTable('strains', strains => {
      strains.increments();
  
      strains.string('strain', 255);
      strains.string('type', 255);
      strains.float('rating');
      strains.string('effects', 255);
      strains.string('flavor', 255);
      strains.string('description', 255);
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('user_response')
    .dropTableIfExists('strains');
  };
