import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import logger from './logger.js'

dotenv.config();
const sequelize: Sequelize = new Sequelize(
    process.env.DB_DATABASE || '',
    process.env.DB_USER || '',
    process.env.DB_ROOT_PASSWORD || '', {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    port: Number(process.env.DB_PORT),
    logging: (log) => logger.info(log)
}
);

export { sequelize };