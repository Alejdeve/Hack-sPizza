<script>
  export default {
    name: 'Logo'
  };
</script>

<template>
    <div class="brand">
        <h1>PizzaHack's</h1>
    </div>
    <div class="logos-container">      
      <img src="/images/P.png" alt="Logo P" />
      <img src="/images/I.png" alt="Logo I" />
      <img src="/images/Z.png" alt="Logo Z" />
      <img src="/images/Z2.png" alt="Logo Z" />
      <img src="/images/A.png" alt="Logo Z" />
    </div>
    <div class="slogan">
        <h2>¡Tus ingredientes, tu pizza perfecta!</h2>
    </div>
</template>

<style scoped>

.logos-container {
    display: flex;
    gap: 20px;
    justify-content: center;
}
  
.logos-container img {
    width: 180px;
    height: auto;
}

.slogan {
    color: azure;
    justify-content: center;
    margin-left: 620px;
    margin-top: 20px;
    font-size: 20px;
}

.brand {
    color: blue;
    font-size: 25px;
    margin-left: 650px;
    padding: 0 80px 0 80px;

}

</style>
  