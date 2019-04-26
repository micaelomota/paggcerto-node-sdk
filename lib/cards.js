module.exports = (client) => {
  return {
    add: (data) => client.post("/cards", data),
    list: () => client.get("/cards"),
    get: (id) => client.get("/cards/" + id),
    remove: (id) => client.remove("/cards/" + id),
    bins: () => client.get("/bins"),
    pay: (data) => client.post("/pay/cards", data),
    capture: (paymentId, data) => client.put("/pay/cards/capture/" + paymentId, data)
  }
}
