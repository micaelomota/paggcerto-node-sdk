module.exports = (client) => {
  return {
    add: (data) => client.post("/splitters", data),
    list: () => client.get("/splitters"),
    get: (id) => client.get("/splitters/find/" + id),
    update: (id, data) => client.put("/splitters/" + id, data)
  }
}
