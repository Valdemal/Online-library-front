<!-- eslint-disable -->
<template>
  <div v-if="allBooks.length">
    <BookItem v-for="book in allBooks" :book="book"/>
  </div>
  <Loader v-else-if="is_loading"/>
  <p v-else>Ошибка сервера! Приносим извинения.</p>
</template>

<script>

/* eslint-disable */
import BookItem from "@/components/Books-Item";
import Loader from "@/components/Loader";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "App",
  components: {
    BookItem, Loader
  },

  data() {
    return {
      is_loading: true
    }
  },

  computed: mapGetters(["allBooks"]),
  methods: mapActions(['fetchBooks']),
  async mounted() {
      await this.fetchBooks()
  },
}

</script>
