var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.send({message: 'whats up'});
});

var port = process.env.PORT || '3000';
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
