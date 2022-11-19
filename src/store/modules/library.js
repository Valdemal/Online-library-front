import axios from "axios";

const SERVER_DOMAIN = 'http://127.0.0.1:8000/api/';

const instance = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
})

export default {

    getters: {
        allBooks(state) {
            return state.books
        },
        getBookById: (state) => (id) => {
            return state.books.find(item => item.id === Number(id))
        },
        getAuthors(state){
            return state.authors
        },
        getAuthorById: (state) => (id) => {
            return state.authors.find(item => item.id === Number(id))
        },
        getBooksOfAuthor: (state) => (author_id) => {
            return state.books.filter(item => item.author === Number(author_id))
        }
    },

    actions: {
        async fetchBooks(context) {
            await instance.get(SERVER_DOMAIN + 'books/').then((response) => {
                const books = response.data
                context.commit('updateBooks', books)
            })
        },

        async fetchBook(context, id) {
            // if (this.books.find(item => item.id === Number(id)) !== undefined)
            //     return

            await instance.get(SERVER_DOMAIN + `books/${id}/`).then((response) => {
                context.commit('insertBook', response.data)
            })
        },

        async fetchAuthor(context, id) {
            // if (this.authors.find(item => item.id === Number(id)) !== undefined)
            //     return

            await instance.get(SERVER_DOMAIN + `authors/${id}/`).then((response) => {
                context.commit('insertAuthor', response.data)
            })
        },

        async fetchAuthors(context) {
            await instance.get(SERVER_DOMAIN + 'authors/').then((response) => {
                context.commit('updateAuthors', response.data)
            })
        }
    },
    mutations: {
        updateBooks(state, books){
            state.books = books
        },
        updateAuthors(state, authors) {
            state.authors = authors
        },
        insertBook(state, book) {
            state.books.push(book)
        },
        insertAuthor(state, authors) {
            state.authors.push(authors)
        }
    },
    state: {
        books: [],
        authors: []
    }
}