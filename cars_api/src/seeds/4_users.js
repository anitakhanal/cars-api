/**
 * Delete existing entries and seed values for `table_name`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function seed(knex) {
  return knex('users')
    .del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'Anita Khanal',
          email: 'anifa@gmail.com',
          password: '$2b$10$uir5P54aydy5u7rkuKJFp.tcyS0AK4JXT.2HRKYA/pUqIsWYSFHgy'
    
        }
      ]);
    });
}