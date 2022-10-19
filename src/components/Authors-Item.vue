<template>
  <div class="content-item">
    <p class="title">{{ author.name }} {{ author.surname }}</p>
    <div class="body">
      <img :src="author.image" width="200">
      <div class="info">
        <text>{{ author.description }}</text>
        <router-link :to="{name: 'author-detail', params: {
          id: author.id,
        }}">Подробнее</router-link>
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