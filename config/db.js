// archivo para la configuracion de la base de datos (postgreSQL)
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect : 'postgres',
    logging: false, //evita mostrar queries en consola
});

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión con postgreSQL exitosa,');
    } catch (error) {
        console.error('Error al conectar a PostgresSQL:', error);
    }
};

testConnection();

module.exports = sequelize;

