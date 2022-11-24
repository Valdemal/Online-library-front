<template>

  <div v-if="token">
<!--    {{ user.username }}-->
    <a @click="onLogoutClick">Выйти</a>
  </div>
  <div v-else style="text-align: left">
    <router-link to="/login">Войти</router-link>
    |
    <router-link to="/registration">Зарегистрироваться</router-link>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "Auth-Links",

  computed: mapGetters({token: 'AuthModule/getAuthToken'}, {user: "AuthModule/getUser"}),

  methods: {
    onLogoutClick() {
      this.$store.dispatch('AuthModule/onLogout').then(() => {
        location.reload()
      })
    }
  }
}

</script>
