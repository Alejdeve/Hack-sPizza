<template>
  <div class="register">
    <h2>Registrarse</h2>
    <form @submit.prevent="registerUser">
      <input v-model="email" type="email" placeholder="Correo electrónico" required />
      <input v-model="password" type="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
    <p>¿Ya tienes una cuenta? <a href="#" @click="$emit('toggle')">Inicia sesión</a></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user';

const userStore = useUserStore();
const email = ref('');
const password = ref('');

const registerUser = async () => {
  try {
    await userStore.signUp(email.value, password.value);
    console.log('Registro exitoso');
    // Redirigir o mostrar mensaje de éxito
  } catch (error) {
    console.error('Error de registro:', error.message);
    // Manejo de errores
  }
};
</script>

<style scoped>
.register {
  width: 300px;
}
input {
  display: block;
  margin-bottom: 10px;
}
</style>
