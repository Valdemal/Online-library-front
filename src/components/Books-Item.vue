
<template>
  <div class="content-item">
    <router-link :to="{name: 'books-detail', params: {id: book.id}}">
      <p class="title">{{ book.title }}</p>
    </router-link>
    <div class="body">
      <img :src="coverSrc">
      <div class="info">
        <p>Автор:
        <router-link :to="{name: 'author-detail', params: {id: book.author}}">
          {{ author.name }} {{ author.surname }}
        </router-link>
        </p>
        <text>{{ book.description }}</text>
        <p>Год написания: {{ book.year_of_writing }}</p>
      </div>
    </div>
  </div>
  <br>
</template>

<script>
/* eslint-disable */

import LibraryApi from "@/api/library_api";

export default {
  name: "Book-Item",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  data(){
    return {
      author: ''
    }
  },
  computed: {
    coverSrc(){
      if (this.book.cover)
        return this.book.cover
      else
        return process.env.BASE_URL + "images/cover_placeholder.jpg"
    }
  },

  mounted() {
    LibraryApi.authorsGetRequest(this.book.author)
        .then((response) => {
          this.author = response.data
        })
        .catch(() => {
          console.log(`Ошибка получения автора ${this.book.title}`)
        })
  }
}

</script>

<style scoped>

</style>