module.exports = (client) => {
  return {
    create: (appId) => client.post(appId + "/signup/seller", data),
    change: (data) => client.post("/presets", data),
    getAccountDetails: () => client.get("/presets")
  }
}
