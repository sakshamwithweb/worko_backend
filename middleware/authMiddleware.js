const basicAuth = require('express-basic-auth');

const authMiddleware = basicAuth({
  users: { 'admin': 'supersecret' },
  challenge: true
});

module.exports = authMiddleware;
