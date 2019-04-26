module.exports = function Client(_auth, _api) {
  const request = require('request');
  const api = _api;
  const auth = "Bearer " + _auth;

  const _request = (options) => {
    return new Promise((resolve, reject) => {
      request(options, function (error, response, body) {
        console.log("======= PAGGCERTO CLIENT REQUEST ======");
        console.log(options);
        console.log("======= PAGGCERTO CLIENT RESPONSE ======");
        console.log("Response statusCode: %s message: ", response.statusCode, response.statusMessage);
        // console.log(error, body);
        if (error == null && body != undefined) {
          resolve(body)
        } else {
          reject(error)
        }
      })
    })
  };

  this.get = (route) => _request({
    url: api + route,
    headers: {
      'Authorization': auth
    },
    method: 'GET',
    json: true
  })

  this.post = (route, data) => _request({
    url: api + route,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': auth
    },
    method: 'POST',
    body: data,
    json: true
  })

  this.put = (route, data) => _request({
    url: api + route,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': auth
    },
    method: 'PUT',
    body: data,
    json: true
  })

  this.delete = (route) => _request({
    url: api + route,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': auth
    },
    method: 'DELETE',
    json: true
  })  
}