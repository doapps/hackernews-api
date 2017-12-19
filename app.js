let express = require('express');
let cors = require('cors');
let path = require('path');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let index = require('./routes/index');
let app = express();

app.use(cors());

// setup mongoDB
let uri = 'mongodb://localhost:27017/hackernews';
mongoose.connect(uri, {useMongoClient: true}).then(
  () => { console.log('success') },
  err => { console.log('error') }
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
app.listen(9000);
