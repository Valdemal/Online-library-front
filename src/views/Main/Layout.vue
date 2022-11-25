<!-- eslint-disable -->
<template>
  <nav>
    <auth-links class="nav-item"></auth-links>

    <div class="nav-item">
      <router-link :to="{name: 'main'}">Главная</router-link>
      |
      <router-link to="/books">Книги</router-link>
      |
      <router-link to="/authors">Авторы</router-link>
    </div>

    <div class="nav-item" style="visibility: hidden">
      Болванка
    </div>
  </nav>
  <hr>
  <main>
    <router-view/>
  </main>
</template>
<script>
import AuthLinks from "@/components/Auth-Links";
export default {
  components: {AuthLinks}
}
</script>