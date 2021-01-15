import Axios from "axios"
import config from "@/configs/apis.js"

export const carStore = {
    namespaced: true,

    state: {
        cars: [],
        carsLoaded: false,
    },

    mutations: {
        emitCars(state, payload){
            state.cars = payload;
            state.carsLoaded = true;
        }
    },

    actions: {
        async getCars(context){
            Axios.get(`${config.baseUrl}/data/cars`)
            .then((res) => 
                context.commit('emitCars', res.data)
            )
            .catch(e => 
                context.dispatch('networkError', e, { root: true })
            )
        },
    },

    getters: {

    },

}