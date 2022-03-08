// import knex from 'knex';
import dotenv from 'dotenv';

// dotenv.config({ path: `../.env` });
dotenv.config();
//  console.log(process.env.DB_CLIENT);
const configuration = {
    client:process.env.DB_CLIENT,
    connection:{
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB_NAME

    },
    migrations: {
        tableName: 'migrations',
        directory:'./migrations',
        stub:'./stub/migration.stub'
    },
    seeds: {
        directory:'./seeds',
        stub:'./stub/seed.stub'
    }
};

export default configuration;