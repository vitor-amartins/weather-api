import axios from 'axios';
import moment from 'moment';
import { Op } from 'sequelize';
import Weather from '../models/weather';

const getWeather = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.body;

    const existingWeather = await Weather.findOne({
      where: {
        latitude,
        longitude,
        createdAt: {
          [Op.gt]: moment().subtract(15, 'minutes'),
        },
      },
    });

    if (existingWeather) {
      res.locals.data = existingWeather;
      res.locals.status = 200;
      return next();
    }

    const params = {
      lat: latitude,
      lon: longitude,
      appid: process.env.OPEN_WEATHER_API_KEY,
      units: 'metric',
      // lang: 'pt_br',
    };

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', { params });

    const weather = await Weather.create({
      latitude,
      longitude,
      main: data.weather[0].main,
      description: data.weather[0].description,
      temperature: data.main.temp,
      minTemperature: data.main.temp_min,
      maxTemperature: data.main.temp_max,
      humidity: data.main.humidity,
      cloudiness: data.clouds.all,
      windSpeed: data.wind.speed,
      windDeg: data.wind.deg,
      rainLastHour: data.rain ? data.rain['1h'] : null,
    });

    res.locals.data = weather;
    res.locals.status = 200;
    return next();
  } catch (err) {
    return next(err);
  }
};

export default {
  getWeather,
};
