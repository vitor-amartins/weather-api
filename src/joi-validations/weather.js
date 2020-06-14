import Joi from '@hapi/joi';

const get = Joi.object({
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
});

export default {
  get,
};
