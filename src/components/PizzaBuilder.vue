<template>
    <div>
        <h2>¡Elije los ingredientes deseados!</h2>
    </div>
    <div class="container">
      <!-- Primera fila de ingredientes -->
      <div class="ingredient-card">
        <img src="/images/Peperoni.png" alt="peperoni">
        <div class="info">
          <p class="name">Peperoni</p>
          <p class="price">$1.50</p>
          <button class="add-button">Add</button>
        </div>
      </div>
      
      <div class="ingredient-card">
        <img src="/images/carne.png" alt="carne">
        <div class="info">
          <p class="name">Carne</p>
          <p class="price">$2.00</p>
          <button class="add-button">Add</button>
        </div>
      </div>
      
      <div class="ingredient-card">
        <img src="/images/champiñon.png" alt="champiñon">
        <div class="info">
          <p class="name">Champiñón</p>
          <p class="price">$1.25</p>
          <button class="add-button">Add</button>
        </div>
      </div>
  
      <div class="ingredient-card">
        <img src="/images/jamon.png" alt="jamon">
        <div class="info">
          <p class="name">Jamón</p>
          <p class="price">$1.75</p>
          <button class="add-button">Add</button>
        </div>
      </div>
  
      <div class="ingredient-card">
        <img src="/images/maiz.png" alt="maiz">
        <div class="info">
          <p class="name">Maíz</p>
          <p class="price">$1.00</p>
          <button class="add-button">Add</button>
        </div>
      </div>
    </div>
  
    <!-- Segunda fila de ingredientes -->
    <div class="container">
      <div class="ingredient-card">
        <img src="/images/pepinillo.png" alt="pepinillo">
        <div class="info">
          <p class="name">Pepinillo</p>
          <p class="price">$0.75</p>
          <button class="add-button">Add</button>
        </div>
      </div>
  
      <div class="ingredient-card">
        <img src="/images/piña.png" alt="piña">
        <div class="info">
          <p class="name">Piña</p>
          <p class="price">$1.00</p>
          <button class="add-button">Add</button>
        </div>
      </div>
  
      <div class="ingredient-card">
        <img src="/images/pollo.png" alt="pollo">
        <div class="info">
          <p class="name">Pollo</p>
          <p class="price">$2.50</p>
          <button class="add-button">Add</button>
        </div>
      </div>
  
      <div class="ingredient-card">
        <img src="/images/queso.png" alt="queso">
        <div class="info">
          <p class="name">Queso</p>
          <p class="price">$1.50</p>
          <button class="add-button">Add</button>
        </div>
      </div>
  
      <div class="ingredient-card">
        <img src="/images/tomates.png" alt="tomates">
        <div class="info">
          <p class="name">Tomates</p>
          <p class="price">$1.20</p>
          <button class="add-button">Add</button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
  .ingredient-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    text-align: center;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    margin: 10px;
  }
  
  .ingredient-card img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .info {
    margin-top: 10px;
  }
  
  .name {
    font-size: 16px;
    font-weight: bold;
    margin: 5px 0;
    color: aliceblue;
  }
  
  .price {
    font-size: 14px;
    color: #555;
    margin: 5px 0;
  }
  
  .add-button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
  }
  
  .add-button:hover {
    background-color: #218838;
  }

  h2 {
    color: azure;
    justify-content: center;
    margin-left: 650px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 30px;
  }
  </style>
  