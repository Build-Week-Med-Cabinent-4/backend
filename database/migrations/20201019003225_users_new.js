exports.up = function(knex) {
    return knex.schema
    .createTable('user_table', users => {
      users.increments();
  
      users.string('username', 255)
        .notNullable()
        .unique();
      users.string('password', 255)
        .notNullable();
      users.string('email', 255)
        .unique();
    })
    
    
    .createTable('strains_table', strains => {
      strains.increments();
  
      strains.string('strain', 255);
      strains.string('type', 255);
      strains.float('rating');
      strains.string('effects', 255);
      strains.string('flavor', 255);
      strains.string('description', 255);
      strains
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user_table')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    })

  //   .createTable('user_strains', userStrains => { 

  //     userStrains
  //     .integer('user_table_id')
  //     .unsigned()
  //     .notNullable()
  //     .references('id')
  //     .inTable('user_table')
  //     .onUpdate('CASCADE')
  //     .onDelete('RESTRICT');
  //     // userStrains
  //     // .integer('strains_table_id')
  //     // .unsigned()
  //     // .notNullable()
  //     // .references('id')
  //     // .inTable('strains_table')
  //     // .onUpdate('CASCADE')
  //     // .onDelete('RESTRICT');
  //     // userStrains
  //     // .primary(['strains_table_id','strains_table_id'])
  // })
  };
  
  exports.down = function(knex) {
    return knex.schema
    // .dropTableIfExists('user_strains')
    .dropTableIfExists('strains_table')
    .dropTableIfExists('user_table')
    
   
  };