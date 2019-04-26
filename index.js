var Client = require('./lib/client')
var paggCerto = require('./lib/paggcerto')

module.exports = function (_production, _token, _applicationId) {
  if (_token == undefined) throw "Invalid token"

  let production = _production !== undefined ? _production : false
  let accountClient = new Client(_token, paggCerto.getAccountAPI(production))
  let paymentClient = new Client(_token, paggCerto.getPaymentsAPI(production))

  return {
    account: require('./lib/account')(accountClient),
    utils: require('./lib/utils')(accountClient),
    cards: require('./lib/cards')(paymentClient),
    splitters: require('./lib/splitters')(paymentClient),
    cancel: require('./lib/cancel')(paymentClient)
  }
}
