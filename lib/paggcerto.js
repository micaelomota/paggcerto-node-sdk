module.exports.config = {
  account: {
    sandbox: {
      v2: {
        url: 'https://account.sandbox.paggcerto.com.br/api/v2'
      }
    },
    production: {
      v2: {
        url: 'https://account.paggcerto.com.br/api/v2'
      }
    }
  },
  payments: {
    sandbox: {
      v2: {
        url: 'https://payments.sandbox.paggcerto.com.br/api/v2'
      }
    },
    production: {
      v2: {
        url: 'https://payments.paggcerto.com.br/api/v2'
      }
    }
  }
}

module.exports.getAccountAPI = (_production) => {
  if (_production) {
    return exports.config.account.production.v2.url
  }
  return exports.config.account.sandbox.v2.url
}

module.exports.getPaymentsAPI = (_production) => {
  if (_production) {
    return exports.config.payments.production.v2.url
  }
  return exports.config.payments.sandbox.v2.url
}
