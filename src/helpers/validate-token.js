import axios from 'axios';
import jwkToPem from 'jwk-to-pem';
import jwt from 'jsonwebtoken';

const validateToken = async (token) => {
  try {
    const url = process.env.COGNITO_URL;
    const response = await axios.get(url);
    const pems = {};
    const { keys } = response.data;

    keys.forEach((key) => {
      pems[key.kid] = jwkToPem({ kty: key.kty, n: key.n, e: key.e });
    });

    const decodedJwt = jwt.decode(token, { complete: true });

    if (!decodedJwt) {
      return null;
    }

    const { kid } = decodedJwt.header;
    const pem = pems[kid];

    if (!pem) {
      return null;
    }

    try {
      const payload = jwt.verify(token, pem);
      return payload;
    } catch (err) {
      return null;
    }
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default validateToken;
