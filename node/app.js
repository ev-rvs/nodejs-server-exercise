const express = require('express');
const path = require('path');
const fs = require('fs');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');

const { healthcheck, ping, pong } = require('./routes');
const { sequelize } = require('./db/sequelize');

const app = express();
const port = process.env.SERVER_PORT || 3003;

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable cors
const corsOptions = {
  allowedHeaders: [
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Headers',
      'Content-Type',
      'token',
  ],
  credentials: true,
  origin: (_origin, callback) => {
    callback(null, true);
  },
};
app.use(cors(corsOptions));
app.use(helmet());
  
// Apply Defined routes
app.use('/', healthcheck);
app.use('/ping', ping);
app.use('/pong', pong);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  next();
});


app.listen(port, async () => {
  // eslint-disable-next-line no-console
  console.info(`Node application is listening on port ${port}!`);
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

module.exports = app;
