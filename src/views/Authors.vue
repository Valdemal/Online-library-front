<!-- eslint-disable -->
<template>
  <div v-if="authors.length">
    <AuthorsItem
        v-for="author in authors"
        :author="author"
    />
  </div>
  <Loader v-else-if="is_loading"/>
</template>

<script>
/* eslint-disable */

import LibraryApi from "@/api/library_api";
import AuthorsItem from "@/components/Authors-Item";
import Loader from "@/components/Loader";

export default {
  name: "Authors",
  components: {Loader, AuthorsItem},
  data() {
    return {
      authors: [],
      is_loading: true
    }
  },
  mounted() {
    LibraryApi.authorsGetRequest().then((response) => {
      this.authors = response.data
    }).catch(() => {
      console.error('Авторы не получены')
    }).finally(() => {
      this.is_loading = false
    })
  }
}
</script>

<style scoped>

</style>