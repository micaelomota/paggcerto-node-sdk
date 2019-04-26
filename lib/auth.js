const request = require('request')

const authenticate = (api, appId, login, password) => new Promise((resolve, reject) => {
    request({
        url: api + "/" + appId + "/signin",
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: {
            "login": login,
            "password": password
        },
        json: true
    }, function (error, response, body) {
        if (error == null && body != undefined) {
          if (!body.errors) {
            resolve(body.token);
          } else {
            reject(body);
          }
        } else {
          reject(error)
        }
    })
})

module.exports = {
    getToken: (api, appId, login, password) => authenticate(api, appId, login, password)
}