<template>
  <div class="content-item">
    <router-link :to="{name: 'author-detail', params: {id: author.id,}}">
      <p class="title">{{ author.name }} {{ author.surname }}</p>
    </router-link>
    <div class="body">
      <img v-if="author.image" :src="author.image">
      <div class="info">
        <text>{{ author.description }}</text>
      </div>
    </div>
  </div>
  <br>
</template>

<script>

export default {
  name: "Authors-Item",
  props: {
    author: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>