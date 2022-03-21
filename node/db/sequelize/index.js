const Sequelize = require('sequelize');

// models
const pongEventModel = require('./models/pongEvent');

// for JEST testing
const dbHost = (process.env.NODE_ENV === 'test') ? process.env.TEST_DATABASE_HOST : 'database';
const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: dbHost,
  dialect: 'postgres',
  port: process.env.POSTGRES_PORT,
});

// initialize models
const pongEvent = pongEventModel(sequelize, Sequelize);

// model methods
const getAllPongEventCount = async () => {
  return { count, rows } = await pongEvent.findAndCountAll({});
};

sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
});

module.exports = {
  sequelize,
  pongEvent,
  getAllPongEventCount,
};
