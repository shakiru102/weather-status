import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    forcast:{
      weather:[],
      api_key:'5156e8b31e8fbf859a727615622db3ba',
      countries:"",
      api_base:'https://api.openweathermap.org/data/2.5/'
    }
  },
  mutations: {
    
    

  },
  actions: {
  },
  modules: {
  }
})
