<script setup>

</script>
<template>
  <section>    
    <form @submit.prevent="checkForm" class="form-container" action="">
      <div class="form-group">
        <label for="name">E-mail</label>
        <input :class="errorName" name="name" id="name" v-model="name" type="text" />
      </div>
      <div class="form-group">
        <label for="name">Password</label>
        <input :class="errorName" v-model="lastName" type="text" />
      </div>      
      <button type="submit">Ok!</button>
    </form>
  </section>
</template>

<style scoped>

button {
    color: aqua;
    padding: 20px 20px 20px 20px;
    margin: 20px 0 0 20px;
    background-color:rgb(13, 13, 13);
    font-size: 14px;
}

label {
    color: aliceblue;    
    margin: 20px 0px 0 20px;
    background-color:rgb(13, 13, 13);
    font-size: 16px;    
}

.form-container {
    display: flex;
    flex-direction: column; /* Colocar los elementos en columnas */
    width: 280px; /* Ancho fijo para el formulario */
    
}

.form-group {
    display: flex; /* Hacer que los elementos hijos se alineen en una fila */
    align-items: center; /* Alinear verticalmente en el centro */
    margin-bottom: 10px; /* Espaciado entre los grupos */
}
label {
    width: 100px; /* Ancho fijo para los labels */
    margin-right: 10px; /* Espaciado entre el label y el input */
    text-align: right; /* Alinear el texto a la derecha */
}

input {
    flex: 1; /* Hacer que el input ocupe el espacio restante */
    padding: 8px; /* Espaciado interno */
    box-sizing: border-box; /* Incluir padding en el ancho total */
    color: azure;
    background-color: rgb(16, 16, 16);
}
</style>