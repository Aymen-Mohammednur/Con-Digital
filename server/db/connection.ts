import { Sequelize } from 'sequelize';

export const db = new Sequelize('condigital', 'root', 'yenegewsew', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
});

async function dbConnection() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

export default dbConnection;
