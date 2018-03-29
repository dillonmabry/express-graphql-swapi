var expect  = require('chai').expect;
var request = require('request');
const url = 'http://localhost:8080/graphql';

it('API getPerson id:1 should return Luke Skywalker', function(done) {
    var postData = { "query": "{ getPerson(id:1) { name }  }" }
    var options = {
      method: 'post',
      body: postData,
      json: true,
      url: url
    }
    request(options, function (err, res, body) {
      if (err) {
        console.error('error posting json: ', err)
        throw err
      }
      expect(res.statusCode).equal(200);
      expect(body.data.getPerson.name).equal('Luke Skywalker');
      done(); 
    });
});
