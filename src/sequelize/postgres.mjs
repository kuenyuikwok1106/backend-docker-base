import 'dotenv/config'
import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

const sequelizePsql = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: 'localhost',
  port: process.env.POSTGRES_PORT,
  ssl: false,
  clientMinMessages: 'notice',
});

export default sequelizePsql;