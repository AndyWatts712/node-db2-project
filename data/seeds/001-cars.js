
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: '1abc', make: 'Ford', model: 'Ranger', mileage: 1000 },
        { VIN: '2abc', make: 'BMW', model: '330Ci', mileage: 2000 },
        { VIN: '3abc', make: 'Land Rover', model: 'RR', mileage: 3000 }
      ]);
    });
};
