const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ email: user.email }, 'your_jwt_secret_key', { expiresIn: '7d' });
};

module.exports = generateToken;
