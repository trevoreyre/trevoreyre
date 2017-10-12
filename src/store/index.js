import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      experiments: []
    },
    mutations: {
      setExperiments (state, experiments) {
        state.experiments = experiments
      }
    }
  })
}

export default createStore
