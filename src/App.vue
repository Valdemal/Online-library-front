<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <p>{{ books }}</p>
</template>

<script>

export default {
  name: "App",

  data() {
    return {
      books: []
    }
  },

  mounted() {
    fetch('http://127.0.0.1:8000/api/books/')
        .then(response => response.json())
        .then(json => {
          this.books = json
        })
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
