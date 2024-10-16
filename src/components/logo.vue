<template>
  <div class="brand">
    <h1>PizzaHack's</h1>
  </div>
  <div class="logos-container">
    <img src="/images/P.png" alt="Logo P" />
    <img src="/images/I.png" alt="Logo I" />
    <img src="/images/Z.png" alt="Logo Z" />
    <img src="/images/Z2.png" alt="Logo Z" />
    <img src="/images/A.png" alt="Logo A" />
  </div>
  <div class="slogan">
    <h2>¡Tus ingredientes, la mejor pizza!</h2>
  </div>
</template>

<style scoped>
body{
  background-color: black;
}

.logos-container {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.logos-container img {
  width: 100px;
  height: auto;
}
.slogan {
  color: #515559;
  margin-top: 20px;
  font-size: 20px;
}
.brand {
  color: #3498db;
  font-size: 25px;
  padding: 20px 0;
}
</style>
  
  