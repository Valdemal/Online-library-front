<!-- eslint-disable -->
<template>
  <div class="detail-view">
    <p class="title">{{ book.title }}</p>
    <img v-if="book.cover" :src="book.cover">

    <div class="section-title"> Автор:
      <router-link :to="{name: 'author-detail', params: {id: String(author.id)}}">
        {{ author.name }} {{ author.surname }}
      </router-link>
    </div>

    <p class="section-title">Описание:</p>
    <div class="description">{{ book.description }}</div>
    <p class="section-title">Год написания: {{ book.year_of_writing }}</p>
    <a :href="book.file">Читать</a>
  </div>
</template>

<script>
import LibraryApi from "@/api/library_api"

export default {
  name: "Books-Detail",
  props: {
    id: {
      type: String,
      required: true
    },
  },

  data() {
    return {
      book: {},
      author: {},
    }
  },

  async mounted() {
    LibraryApi.booksGetRequest(this.id).then((response) => {
      this.book = response.data

      LibraryApi.authorsGetRequest(this.book.author).then((response) => {
        this.author = response.data
      }).catch(() => {
        console.log("Ошибка получения автора!")
      })
    }).catch(() => {
      console.log("Ошибка получения автора!")
    })
  }
}
</script>
