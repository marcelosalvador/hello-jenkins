/**
 * Created by marcelo.d.salvador on 10/28/2014.
 */
var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('respond with hello world', function(done) {
        request(app).get('/').expect('hello world', done);
    });
});