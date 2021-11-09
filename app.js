const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const router = require('./routes');
const { authenticate } = require('./middleware');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use('/restricted', authenticate);
app.use('/', router);

module.exports = app;
