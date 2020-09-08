
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments("id")
      tbl.string("VIN").unique().notNullable().index()
      tbl.string("make").notNullable()
      tbl.string("model").notNullable()
      tbl.integer("mileage").notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfItExists("cars")
};
