import validateToken from './validate-token';

const authorizer = async (req, res, next) => {
  try {
    /**
     * Get token
     */
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ data: 'Missing token' });
    }

    /**
     * Check with cognito if token is valid and what's the email
     */
    const payload = await validateToken(token);

    if (!payload) {
      return res.status(401).json({ data: 'Invalid token' });
    }

    return next();
  } catch (err) {
    return res.status(500).json({ data: 'Internal Server Error' });
  }
};

export default authorizer;
