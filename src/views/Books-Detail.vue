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
import {mapActions} from "vuex";

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
  methods: mapActions(['fetchAuthors', 'fetchBooks']),
  async mounted() {
    // await this.fetchBook(this.id)
    // await this.fetchAuthor(this.book.author)
    await this.fetchAuthors()
    await this.fetchBooks()
    this.book = this.$store.getters.getBookById(this.id)
    this.author = this.$store.getters.getAuthorById(this.book.author)
    console.log(this.author)
    console.log(this.book)
  }
  // data() {
  //   return {
  //     book: {},
  //     author: {},
  //   }
  // },
  // async mounted() {
  //
  //   this.book = this.$store.getters.getBookById(this.id)
  //   this.author = this.$store.getters.getAuthorById(this.book.author)
  // }
}
</script>
