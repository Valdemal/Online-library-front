import axios from "axios";
import {SERVER_API_URL} from './config'

function getBooksUrl(id = undefined) {
    let postfix = id !== undefined ? `${id}/` : ''
    return SERVER_API_URL + 'books/' + postfix
}

function getAuthorsUrl(id = undefined) {
    let postfix = id !== undefined ? `${id}/` : ''
    return SERVER_API_URL + 'authors/' + postfix
}

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {
    booksGetRequest(id = undefined) {
        return instance.get(getBooksUrl(id))
    },

    authorsGetRequest(id = undefined) {
        return instance.get(getAuthorsUrl(id))
    },

    authorBooksGetRequest(id) {
        return instance.get(getAuthorsUrl(id) + 'books/')
    }
}