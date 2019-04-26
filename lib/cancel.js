module.exports = (client) => {
  return {
    cancelPayment: (paymentId) => client.post("/cancel/"+ paymentId, {}),
    cancelCardTransaction: (nsu) => client.post("/card-transactions/cancel/" + nsu),
    cancelTicket: (data) => client.post("/bank-slips/cancel/number", data)
  }
}
