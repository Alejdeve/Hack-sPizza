<template>
  <div id="app">
    <Auth />
    <Logo />    
  </div>
</template>

<script setup>
import Logo from './components/Logo.vue'
import Auth from './pages/Auth.vue';
</script>

<style>
body {
  background-color: #000000;
  margin: 0;
  padding: 0;
  color: rgb(217, 217, 217);
}

input {
  margin-left: 70px;

}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f9f9f9;
  margin-top: 60px;
}


</style>
