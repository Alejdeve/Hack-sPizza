<script setup>

</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>

<script setup>
import { ref } from 'vue'

const name = ref('')
const lastName = ref('')
const dni = ref('')
const email = ref('')
const errorName = ref('')
const errorEmail = ref('')
const textoGrande = ref('')

function tieneNumeros(text) {
  let result = false
  const regex = /\d/

  if (regex.test(text)) result = true

  return result
}

function tieneArroba(text) {
  return !text.toString().includes('@')
}

function checkForm() {
  let nombreTieneError = tieneNumeros(name.value)
  let apellidoTieneError = tieneNumeros(name.value)
  let emailTieneError = tieneArroba(email.value)

  if (nombreTieneError || apellidoTieneError) errorName.value = 'errorMsg'
  if (emailTieneError) errorEmail.value = 'errorMsg'

  if (!nombreTieneError && !apellidoTieneError && !emailTieneError) console.log(textoGrande)
}
</script>



<style scoped>
label {
  margin-top: 30px;
  display: block;
  width: 100px;
}
input {
  width: 200px;
}

.center {
  background-color: rgb(151, 151, 196);
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.errorMsg {
  border: 5px solid red;
}

.background-blue{
    background-color: blue;
}
</style>
