module.exports = (sequelize, type) => {
  return sequelize.define('pong_event', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    client_host: type.STRING
  });
};
