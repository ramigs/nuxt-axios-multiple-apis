export default ($axios) => ({
  getLyrics(artist, title) {
    return $axios.$get(`${process.env.API_LYRICSOVH_URL}/${artist}/${title}`)
  }
})
