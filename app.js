var express = require('express');
var logger = require('morgan');
var cors = require('cors')

var buddiesRouter = require('./routes/buddies');

require('dotenv').config();
require('./config/database');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/buddies', buddiesRouter);

module.exports = app;
