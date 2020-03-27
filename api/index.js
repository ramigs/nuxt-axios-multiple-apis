import lyricsRepo from './lyrics'
import genrenatorRepo from './genrenator'
import createRepo from './repo'
export default ({ $axios, store }, inject) => {
  const repositoryWithAxios = createRepo($axios)
  const repositories = {
    lyrics: repositoryWithAxios(lyricsRepo),
    genrenator: repositoryWithAxios(genrenatorRepo)
  }
  inject('api', repositories)
  store.$api = repositories
}
