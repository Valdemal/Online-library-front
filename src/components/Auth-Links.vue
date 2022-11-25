<template>

  <div v-if="loaded && token" class="main">
    <router-link to="/user"><img :src="photoSrc"></router-link>
    |
    <router-link to="/user"> {{ user.username }} </router-link>
    |
    <a @click="onLogoutClick"> Выйти </a>
  </div>
  <div v-else style="text-align: left">
    <router-link to="/login">Войти</router-link>
    |
    <router-link to="/registration">Зарегистрироваться</router-link>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

const photo_placeholder_href = new URL("@/assets/images/user_photo_placeholder.png", import.meta.url).href

export default {
  name: "Auth-Links",

  data() {
    return {
      loaded: false,
    }
  },

  computed: {
    ...mapGetters({token: 'AuthModule/getAuthToken', user: "AuthModule/getUser"}),

    photoSrc() {
      return this.loaded && this.user.photo ? this.user.photo : photo_placeholder_href
    },
  },

  methods: {
    onLogoutClick() {
      this.$store.dispatch('AuthModule/onLogout').then(() => {
        location.reload()
      })
    }
  },

  mounted() {
    this.$store.dispatch('AuthModule/onFetchUser').then(() => {
      this.loaded = true
    })
  }
}

</script>

<style scoped>

a {
  text-decoration: underline;
  cursor: pointer;
}

.main {
  display: flex;
  align-items: center;
}
img {
  height: 45px;
  width: 45px;
  border: solid 2px;
  border-radius: 50%;
}

img:hover {
  border-color: #42b983;
}
</style>
