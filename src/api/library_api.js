import axios from "axios";

const SERVER_DOMAIN = 'http://127.0.0.1:8000/api/';

function getBooksUrl(id = undefined) {
    let postfix = id !== undefined ? `${id}/` : ''
    return SERVER_DOMAIN + 'books/' + postfix
}

function getAuthorsUrl(id = undefined) {
    let postfix = id !== undefined ? `${id}/` : ''
    return SERVER_DOMAIN + 'authors/' + postfix
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