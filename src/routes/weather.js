import express from 'express';
import Controller from '../controllers/weather';
import Validations from '../joi-validations/weather';
import CheckInputs from '../helpers/check-inputs';

const router = express.Router();

router.route('/weather').post(
  CheckInputs(Validations.get),
  Controller.getWeather,
);

export default router;
