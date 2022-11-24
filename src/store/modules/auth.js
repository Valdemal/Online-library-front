import API from "@/api/auth_api"

export const AuthModule = {
    namespaced: true,

    state() {
        return {
            credentials: {
                token: localStorage.getItem('token') || null,
            },

            user: null
        }
    },

    getters: {
        getAuthToken: (state) => state.credentials.token,

        getUser: (state) => state.user,
    },

    mutations: {
        setToken(state, token) {
            state.credentials.token = token
            API.setTokenToHeader(token)
            localStorage.setItem('token', token) // Тут должно быть сохраниение в куки
        },

        setUser(state, user) {
            state.user = user
        },

        deleteToken(state) {
            state.credentials.token = null
            API.deleteTokenFromHeader()
            localStorage.removeItem('token')
        },

        deleteUser(state) {
            state.user = null
        }
    },

    actions: {
        onLogin({commit}, {login, password}) {
            return API.logIn(login, password).then((response) => {
                const token = response.data["auth_token"]
                commit('setToken', token)
            })
        },

        onLogout({commit}) {
            return API.logOut().then(() => {
                commit('deleteToken')
                commit('deleteUser')
            })
        },

        onFetchUser({commit}) {
            return API.fetchUser().then((response) => {
                commit('setUser', response.data)
            })
        }
    }
}