<!-- eslint-disable -->
<template>
  <div>
    <p>{{ book.title }}</p>
    <p> Автор: {{ author.name }} {{ author.surname }} </p>
    <text>{{ book.description }}</text>
    <p>Год написания: {{ book.year_of_writing }}</p>
    <a :href="book.file">Читать</a>
  </div>
</template>

<script>
import Api from "@/api";

export default {
  name: "Books-Detail",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      book: {},
      author: {},
    }
  },
  mounted() {
    Api.booksGetRequest(this.id).then((response) => {
      this.book = response.data

      Api.authorsGetRequest(this.book.author).then((response) => {
        this.author = response.data
        console.log(this.author)
      })
    })

  }
}
</script>
