<template>
  <span class="loader"></span>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Loader'
}

</script>

<style scoped>
.loader {
  width: 48px;
  height: 40px;
  margin-top: 30px;
  display: inline-block;
  position: relative;
  color: #42b983;
  border-radius: 15% 15% 35% 35%;
}
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  left: 45px;
  top: 8px;
  color: #42b983;
  width: 16px;
  height: 20px;
  border-radius: 0 4px 4px 0;
}
.loader::before {
  content: '';
  position: absolute;
  width: 1px;
  height: 10px;
  color: #41b883;
  top: -15px;
  left: 11px;
  box-sizing: border-box;
  animation: animloader 1s ease infinite;
}

@keyframes animloader {
  0% {
    box-shadow: 2px 0px rgba(51, 122, 183, 0), 12px 0px rgba(51, 122, 183, 0.3), 20px 0px rgba(51, 122, 183, 0);
  }
  50% {
    box-shadow: 2px -5px rgba(51, 122, 183, 0.5), 12px -3px rgba(51, 122, 183, 0.5), 20px -2px rgba(51, 122, 183, 0.6);
  }
  100% {
    box-shadow: 2px -8px rgba(51, 122, 183, 0), 12px -5px rgba(51, 122, 183, 0), 20px -5px rgba(51, 122, 183, 0);
  }
}
</style>