<template>
  <div class="content">
    <form @submit.prevent="onSubmit" method="post">

      <div class="field">
        <label for="login">Имя пользователя: </label>
        <input type="text" id="login" v-model="login">
      </div>

      <div class="field">
        <label for="password">Пароль: </label>
        <input type="password" id="password" v-model="password">
      </div>

      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "Login-View",
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    onSubmit(){
      this.$store.dispatch('AuthModule/onLogin', {
        login: this.login,
        password: this.password
      }).then(() => {
        this.$router.push({name: 'main'})
      })
    }
  }
}
</script>

<style scoped>

.content {
  padding-top: 10%;
}

form {
  display: flex;
  flex-direction: column;
  border: 1px solid #2c3e50;
  border-radius: 5px;
  padding: 10px;
  vertical-align: center;
}

.field {
  padding-bottom: 10px;
}

button {
  width: 30%;
  margin-left: 35%;
  background-color: #42b983;
  border-radius: 2px;
  border: none;
  height: 20px;
  cursor: pointer;
}
</style>