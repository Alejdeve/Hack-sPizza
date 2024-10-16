<template>
  <div>
    <button @click="showLogin = true; showRegister = false">Iniciar sesión</button>
    <button @click="showRegister = true; showLogin = false">Registrarse</button>
    
    <Login v-if="showLogin" />
    <Register v-if="showRegister" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Login from './Login.vue'
import Register from './Register.vue'

const showLogin = ref(true)
const showRegister = ref(false)
</script>

<style scoped>

body {
  color: #ecf0f1;
}
button {
  color: #ecf0f1;
  padding: 10px 20px;
  margin: 10px;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #000000;
}
</style>
  
  
