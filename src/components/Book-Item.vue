
<template>
  <div class="content-item">
    <p class="title">{{ book.title }}</p>
    <div class="body">
      <div class="info">
        <p>Автор: {{ author.name }} {{ author.surname }}</p>
        <text>{{ book.description }}</text>
        <p>Год написания: {{ book.year_of_writing }}</p>
        <a :href="book.file">Читать</a>
      </div>
    </div>
  </div>
  <br>
</template>

<script>
/* eslint-disable */

import Api from "@/api";

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

  mounted() {
    Api.authorsGetRequest(this.book.author)
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