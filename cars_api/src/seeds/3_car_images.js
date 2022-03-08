/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('car_images')
    .del()
    .then(() => {
      return knex('car_images').insert([
        {
          car_id: 1,
          image_url: 'https://abcd.com'
        },
        {
          car_id: 1,
          image_url: 'https://efgh.com'
        },
        {
          car_id: 2,
          image_url: 'https://ijkl.com'
        },
        {
          car_id: 3,
          image_url: 'https://mnop.com'
        }
      ]);
    });
}