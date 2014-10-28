/**
 * Created by marcelo.d.salvador on 10/28/2014.
 */
var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(process.env.PORT || 5000);

module.exports = app;