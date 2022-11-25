<template>
  <router-view></router-view>
</template>

<style>


nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav-item {
  width: 30%;
}

nav {
  padding: 10px 30px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a.router-link-exact-active {
  color: #42b983;
}


.library-links {
  align-self: center;
}

html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin-right: 30%;
  margin-left: 30%;
}


.detail-view {
  border: solid 1px;
  border-radius: 2px;
  padding: 1%;
  text-align: left;
}

.detail-view .title {
  text-align: center;
  font-weight: bold;
  color: #2c3e50;
}

.detail-view img {
  width: 100%;
  border-radius: 2px;
}

.detail-view .section-title {
  text-align: left;
  font-weight: bold;
  color: #2c3e50;
}

.detail-view ul li {
  text-align: left;
}

.detail-view .description {
  width: 100%;
  text-align: justify;
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
a {
  color: #2c3e50;
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

.content-item .body img {
  width: 40%;
}


#app {
  text-align: center;
  color: #2c3e50;
}

</style>
