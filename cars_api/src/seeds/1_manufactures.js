/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('manufactures')
    .del()
    .then(() => {
      return knex('manufactures').insert([
        {
          name: 'Hyundai',
          description: 'Description data for Hyundai'
        },
        {
          name: 'Suzuki',
          description: 'Description data for Suzuki'
        },
        {
          name: 'Tata',
          description: 'Description data for Tata'
        }
      ]);
    });
}