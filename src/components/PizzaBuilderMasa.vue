<template>
    <div>
        <h2>¡Elije tu masa favorita!</h2>
    </div>
    <div class="container">
      <!-- Primera fila de ingredientes -->
      <div class="ingredient-card">
        <img src="/images/masa1.png" alt="peperoni">
        <div class="info">
          <p class="name">Masa delgada</p>
          <p class="price">$2.00</p>
          <button class="add-button">Add</button>
        </div>
      </div>
      
      <div class="ingredient-card">
        <img src="/images/masa2.png" alt="carne">
        <div class="info">
          <p class="name">Masa tradicional</p>
          <p class="price">$2.50</p>
          <button class="add-button">Add</button>
        </div>
      </div>
      
      <div class="ingredient-card">
        <img src="/images/masa3.png" alt="champiñon">
        <div class="info">
          <p class="name">Masa borde de queso</p>
          <p class="price">$3.00</p>
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