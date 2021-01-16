import Axios from "axios"
import config from "@/configs/apis.js"
import { Notify } from 'quasar'
import router from '../router'

export const authStore = {
    namespaced: true,

    state: {
        isLoggedIn: false,
        // userToken: null,
        userEmail: null,
    },

    mutations: {
        setUser(state, payload){
            state.isLoggedIn = true;
            // state.userToken = payload["user-token"];
            state.userEmail = payload["email"];
        },
        clearUser(state){
            state.isLoggedIn = false;
            // state.userToken = null;
            state.userEmail = null;
        }
    },

    actions: {
        async signInUser(context, payload){
            Axios.post(`${config.baseUrl}/users/login`, payload)
            .then(res => {
                context.commit("setUser", res.data)
            })
            .then(()=>{
                router.push("/");
            })
            .catch(e => 
                Notify.create({
                    color: 'red-4',
                    textColor: 'white',
                    icon: 'fas fa-exclamation-triangle',
                    message: e.response.data.message,
                    position: 'top',
                    timeout: 1500,
                })
            )
        },
        async signUpUser(context, payload){
            Axios.post(`${config.baseUrl}/users/register`, payload)
            .then(res => {
                context.commit("setUser", res.data)
            })
            .then(()=>{
                router.push("/");
            })
            .catch(e => 
                Notify.create({
                    color: 'red-4',
                    textColor: 'white',
                    icon: 'fas fa-exclamation-triangle',
                    message: e.response.data.message,
                    position: 'top',
                    timeout: 1500,
                })
            )
        },
        logUserOut(context){
            context.commit("clearUser");
            router.push("/");
        }
    },

    getters: {

    },

}