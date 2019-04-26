module.exports = (client) => {
  return {
    getBusinessTypes: () => client.get('/business-types'),
    getCities: (uf) => client.get('/cities/' + uf),
    getBanks: () => client.get('/banks'),
    getBusinessActivities: () => client.get('/business-activities'),
    getMarketingMedias: () => client.get('/marketing-medias')
  }
}
