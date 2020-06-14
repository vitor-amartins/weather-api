import 'dotenv/config';

const checkInputs = (joiSchema) => async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body);
    if (error) {
      if (process.env.NODE_ENV === 'develop') {
        return next({ status: 400, data: error.details[0].message });
      }
      return next({ status: 400, data: 'Invalid Input' });
    }
    return next();
  } catch (err) {
    return next(err);
  }
};

export default checkInputs;
