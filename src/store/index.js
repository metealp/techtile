import Vue from 'vue'
import Vuex from 'vuex'

import { carStore } from './car.store.js'
import { authStore } from './auth.store.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({

  state: {

  },

  mutations: {

  },

  actions: {

  },

  getters: {

  },
  modules: {
    carStore,
    authStore,
  },

  strict: debug,
})
