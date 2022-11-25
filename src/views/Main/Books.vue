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
import BookItem from "@/components/Books-Item";
import Loader from "@/components/Loader";
import LibraryAPI from "@/api/library_api"

export default {
  name: "App",
  components: {
    BookItem, Loader
  },

  data() {
    return {
      is_loading: true,
      books: []
    }
  },

  async mounted() {
    LibraryAPI.booksGetRequest().then((response) => {
      this.books = response.data
    }).catch(() => {
      console.log("Ошибка получения книг!")
    }).finally(() => {
      this.is_loading = false
    })
  },
}

</script>
