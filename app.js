require('dotenv').config();
const cors = require('cors');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var router = require('./routes/index');
var processRouter = require ('./routes/process');
var freezbeRouter = require('./routes/freezbe');
var ingredientsRouter = require('./routes/ingredients');
var authRouter = require('./routes/auth');


var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(`${process.env.API_URL}`, router);
app.use(`${process.env.API_URL}process/`, processRouter);
app.use(`${process.env.API_URL}freezbe/`, freezbeRouter);
app.use(`${process.env.API_URL}ingredients/`, ingredientsRouter);
app.use(`${process.env.API_URL}auth/`, authRouter);

app.listen(process.env.PORT, () => console.log('Server app listening on port ' + process.env.PORT));

module.exports = app;