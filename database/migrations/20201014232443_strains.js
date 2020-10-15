exports.up = function(knex) {
    return knex.schema.createTable('strains', strains => {
      strains.increments();
  
      strains.string('strain', 255).notNullable().unique();
      strains.string('type', 255).notNullable();
      strains.float('rating');
      strains.string('effects', 255).notNullable();
      strains.string('flavor', 255).notNullable();
      strains.string('description', 255).notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('strains');
  };
