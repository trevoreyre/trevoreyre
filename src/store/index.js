import fetch from 'isomorphic-fetch'
import Vuex from 'vuex'

import { mapPenToExperiment } from '~/common/maps'

const createStore = () => {
  return new Vuex.Store({
    state: {
      experiments: []
    },
    mutations: {
      setExperiments (state, experiments) {
        state.experiments = experiments
      }
    },
    actions: {
      async nuxtServerInit ({ commit }) {
        let page = 1
        let json = '{}'
        let experiments = []
        while (json.error === undefined) {
          const url = `http://cpv2api.com/collection/XjyazW?page=${page}`
          const res = await fetch(url)
          json = await res.json()
          if (!json.error && json.data) {
            experiments = experiments.concat(json.data.map(mapPenToExperiment))
            page += 1
          }
        }
        await commit('setExperiments', experiments)
      }
    }
  })
}

export default createStore
