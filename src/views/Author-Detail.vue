<!-- eslint-disable -->
<template>
  <div class="detail-view">

    <p class="title">{{ author.name }} {{ author.surname }}</p>
    <img v-if="author.image" :src="author.image">
    <p class="section-title">Описание:</p>
    <div class="description">{{ author.description }}</div>
    <p class="section-title">Книги:</p>
    <ul>
      <li v-for="book in books">
        <router-link :to="{name: 'books-detail', params: {id: book.id}}">
          {{ book.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import LibraryApi from "@/api/library_api";

export default {
  name: "Author-Detail",
  components: {},

  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      author: {},
      books: {},
    }
  },
  mounted() {
    LibraryApi.authorBooksGetRequest(this.id).then((response) => {
      this.books = response.data
    })

    LibraryApi.authorsGetRequest(this.id).then((response) => {
      this.author = response.data
    })
  }
}
</script>

