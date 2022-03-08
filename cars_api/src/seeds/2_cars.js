/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('cars')
    .del()
    .then(() => {
      return knex('cars').insert([
        {
          manufacture_id: 1,
          model: 'i10',
          horsepower: 1100
        },
        {
          manufacture_id: 1,
          model: 'i20',
          horsepower: 1200
        },
        {
          manufacture_id: 2,
          model: 'Brezza',
          horsepower: 1400
        },
        {
          manufacture_id: 3,
          model: 'Tiago',
          horsepower: 1050
        }
      ]);
    });
}