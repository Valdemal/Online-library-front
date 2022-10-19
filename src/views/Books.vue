<!-- eslint-disable -->
<template>
  <div v-if="books.length">
    <BookItem v-for="book in books" :book="book"/>
  </div>
  <Loader v-else-if="is_loading"/>
  <p v-else>Ошибка сервера! Приносим извинения.</p>
</template>

<script>

/* eslint-disable */
import Api from "@/api";
import BookItem from "@/components/Book-Item";
import Loader from "@/components/Loader";

export default {
  name: "App",
  components: {
    BookItem, Loader
  },
  data() {
    return {
      books: [],
      is_loading: true
    }
  },

  mounted() {
    Api.booksGetRequest().then((response) => {
      if (response.status === 200) {
        this.books = response.data
      }
    }).catch(() => {
      console.log('Ошибка получения книг')
    }).finally(() => {
      this.is_loading = false
    })
  },
}

</script>
