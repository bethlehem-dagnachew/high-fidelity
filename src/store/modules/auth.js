// import axios from "axios";

// import { Http } from '@/services/http'
import api from '@/services/api'

const state = {
    user: null,
    token: null,
};
const getters = {
    isAuthenticated: (state) => !!state.user && !!state.token,
    StateUser: (state) => state.user,
};
const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    setToken(state, token) {
        state.token = token;
    },
    LogOut(state) {
        state.user = null;
        state.token = null;
    },
    // destroyToken(state) {
    //     state.token = null;
    //     localStorage.setItem('token', "null");
    //   },
};
const actions = {
    // Register({dispatch}, form) {
    //     return new Promise((resolve, reject) => {
    //         api.request().post("/auth/signup", form)
    //             .then((response) => {                     
    //                 dispatch("");
                    
    //                 resolve(response.data.token);
    //                 resolve(true);
    //             }).catch((error) => {
    //                 console.log(error)
    //                 reject(error);
    //             })
    //     })
    // },

    LogIn({ commit }, User) {
        return new Promise((resolve, reject) => {
            api.request().post("/login", User)
                .then((response) => { 
                    console.log(response.data)
                    commit("setUser", User.get("email"));
                    commit("setToken", response.data.token);
                    resolve(true);
                   
                }).catch(error => {
                    console.log(error)
                    reject(error);
                })
        })
    },

    LogOut({ commit }) {
        return new Promise((resolve, reject) => {
            api.request({ auth: true }).post("auth/log-out-from-all")
                .then((response) => {
                    commit("LogOut")
                    resolve(response.data);
                }).catch(error => {
                    console.log(error)
                    reject(false);
                })
        })
    }
};
export default {
    state,
    getters,
    actions,
    mutations,
    namespaced: true,
};
