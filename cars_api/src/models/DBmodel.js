import knex from 'knex';
import camelize from 'camelize';
import snakeize from 'snakeize';

import connection from '../knexfile.js';

class DBModel {
    constructor(table) {
        this.table = table;
        this.connection = knex(connection);
    }
    async getAll() {
        const data = await this.connection(this.table).select('*');
    
        return camelize(data);
      }

    async getById(id){
        const [data] = await this.connection(this.table).select('*').where('id', id);
        return data ? camelize(data): null;
    }

    async findByParams(params) {
        const [data] = await this.connection(this.table).select('*').where(snakeize(params));
        return data ? camelize(data) : null;
    }

    async save(data) {
        const result = await this.connection(this.table).insert(snakeize(data)).returning('*');
        return camelize(result);
    }
    async updateById(id, data) {
        const result = await this.connection(this.table).update(snakeize(data)).where({ id }).returning('*');
        return camelize(result);
    }

    async removeById(id){
        const result = await this.connection(this.table).delete().where({ id });
        return camelize(result);
    }
    async removeByParams(params) {
        const result = await this.connection(this.table).delete().where(snakeize(params));
    
        return camelize(result);
      }
    async query(sql, params) {
        const result = await this.connection.raw(sql, params);
    
        return camelize(result.rows);
      }
}

export default DBModel;