const Sequelize = require('sequelize');

// models
const pongEventModel = require('./models/pongEvent');

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'database',
  dialect: 'postgres',
});

// initialize models
const pongEvent = pongEventModel(sequelize, Sequelize);

// model methods
const getAllPongEventCount = async () => {
  return { count, rows } = await pongEvent.findAndCountAll({});
};

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
});

module.exports = {
  sequelize,
  pongEvent,
  getAllPongEventCount,
};