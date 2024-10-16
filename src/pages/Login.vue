<template>
  <div class="login">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="loginUser">
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Iniciar Sesión</button>
    </form>
    <p>¿No tienes una cuenta? <a href="#" @click="$emit('toggle')">Regístrate</a></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user';

const userStore = useUserStore();
const email = ref('');
const password = ref('');

const loginUser = async () => {
  try {
    await userStore.signIn(email.value, password.value);
    // Redirigir o mostrar mensaje de éxito
    console.log('Inicio de sesión exitoso');
  } catch (error) {
    console.error('Error de inicio de sesión:', error.message);
    // Manejo de errores
  }
};
</script>

<style scoped>
.login {
  width: 300px;
}
input {
  display: block;
  margin-bottom: 10px;
}
</style>
