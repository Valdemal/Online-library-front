<template>
  <nav>
    <router-link to="/">Главная</router-link>
    |
    <router-link to="/books">Книги</router-link>
    |
    <router-link to="/authors">Авторы</router-link>
  </nav>
  <hr>
  <main>
    <router-view/>
  </main>
</template>

<style>

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin-right: 30%;
  margin-left: 30%;
}

.content-item {
  text-align: left;
}

.content-item .title {
  margin: 0;
  text-align: center;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
  border: 1px solid #2c3e50;
  border-radius: 5px;
}

.content-item .body {
  border: 1px solid #2c3e50;
  border-top: None;
  padding: 5px;
  display: flex;
  margin: 0 5px 5px;
}

.content-item .body .info{
  margin-left: 5px;
  overflow: hidden;
  margin-right: auto;
  text-align: justify;
}


#app {
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
