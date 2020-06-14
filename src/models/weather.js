import { Model, DataTypes } from 'sequelize';

class Weather extends Model {
  static init(sequelize) {
    super.init({
      latitude: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      longitude: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      main: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      temperature: {
        type: DataTypes.DOUBLE,
      },
      minTemperature: {
        type: DataTypes.DOUBLE,
      },
      maxTemperature: {
        type: DataTypes.DOUBLE,
      },
      humidity: {
        type: DataTypes.INTEGER,
      },
      cloudiness: {
        type: DataTypes.INTEGER,
      },
      windSpeed: {
        type: DataTypes.DOUBLE,
      },
      windDeg: {
        type: DataTypes.INTEGER,
      },
      rainLastHour: {
        type: DataTypes.DOUBLE,
      },
    }, {
      sequelize,
      underscored: false,
    });
  }
}

export default Weather;
