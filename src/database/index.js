import Sequelize from 'sequelize';
import dbConfig from './config';
import Weather from '../models/weather';

const connection = new Sequelize(dbConfig);

Weather.init(connection);

export default connection;
