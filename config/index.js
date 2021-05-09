require('dotenv').config();

const poolConfig = {
  max: 20,
  min: 0,
  idle: 10000,
  acquire: 90000,
};

module.exports = {
  development: {
    username: process.env.DBUSER,
    password: process.env.DBPASS,
    database: process.env.DB,
    logging: true,
    host: process.env.DBHOST,
    dialect: 'postgresql',
    pool: poolConfig,
  },
};
