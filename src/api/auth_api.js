import {SERVER_DOMAIN_URL} from "@/api/config";
import axios from "axios";

const TOKEN_API_URL = SERVER_DOMAIN_URL + 'auth/token/'
const USERS_API_URL = SERVER_DOMAIN_URL + 'api/auth/users'

const loginConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const LoginAPIInstance = axios.create(loginConfig)

const defaultConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
}

const token = localStorage.getItem('token')
if (token)
    defaultConfig.headers['Authorization'] = `Token ${token}`

export const DefaultAPIInstance = axios.create(defaultConfig)

export default {
    logIn(login, password) {
        return LoginAPIInstance.post(TOKEN_API_URL + 'login/', {
            'username': login, 'password': password
        })
    },

    logOut() {
        return DefaultAPIInstance.post(TOKEN_API_URL + 'logout/')
    },

    fetchUser() {
        return DefaultAPIInstance.post(USERS_API_URL + 'me/')
    },

    // Возможно это делается через интерсепторы
    setTokenToHeader(token) {
        DefaultAPIInstance.defaults.headers['Authorization'] = `Token ${token}`
    },

    deleteTokenFromHeader() {
        delete DefaultAPIInstance.defaults.headers['Authorization']
    }
}