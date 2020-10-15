const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const StrainsRouter = require('../strains/strains-router.js');
const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/auth', authRouter);
server.use('/api/strains', authenticate, StrainsRouter);

server.get('/', (req, res) => {
    res.status(200).json({
      api: 'up',
    });
  });



module.exports = server;