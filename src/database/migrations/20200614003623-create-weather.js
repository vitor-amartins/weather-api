module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Weather', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    latitude: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    longitude: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    main: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    temperature: {
      type: Sequelize.DOUBLE,
    },
    minTemperature: {
      type: Sequelize.DOUBLE,
    },
    maxTemperature: {
      type: Sequelize.DOUBLE,
    },
    humidity: {
      type: Sequelize.INTEGER,
    },
    cloudiness: {
      type: Sequelize.INTEGER,
    },
    windSpeed: {
      type: Sequelize.DOUBLE,
    },
    windDeg: {
      type: Sequelize.INTEGER,
    },
    rainLastHour: {
      type: Sequelize.DOUBLE,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('Weather'),
};
