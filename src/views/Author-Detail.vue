<!-- eslint-disable -->
<template>
  <div>
    <p class="title">{{ author.name }} {{ author.surname }}</p>
    <img :src="author.image">
    <text>{{ author.description }}</text>
    <p>Книги</p>
    <ul>
      <li v-for="book in books">
        <router-link :to="{name: 'books-detail', params: {
          id: book.id
        }}">{{ book.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Api from "@/api";

export default {
  name: "Author-Detail",
  components: {},

  props: {
    id: {
      type: Number,
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
    Api.authorBooksGetRequest(this.id).then((response) => {
      this.books = response.data
    })

    Api.authorsGetRequest(this.id).then((response) => {
      this.author = response.data
    })
  }
}
</script>

<style scoped>

</style>