export default ($axios) => ({
  getRandomGenre() {
    return $axios.$get(`${process.env.API_GENRENATOR_URL}/genre`)
  }
})
