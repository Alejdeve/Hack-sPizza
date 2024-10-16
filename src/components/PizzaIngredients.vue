<template>
    <div>
      <h2>Ingredientes</h2>
      <div class="ingredients-list">
        <div 
          v-for="ingredient in ingredients" 
          :key="ingredient.id" 
          class="ingredient-item"
        >
          <label>
            <input 
              type="checkbox" 
              v-model="ingredient.selected" 
              @change="updateSelected(ingredient)"
            />
            {{ ingredient.name }} ({{ ingredient.price }} $)
          </label>
        </div>
      </div>
      <div class="total-price">
        <p>Total: {{ totalPrice }} $</p>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      // Lista de ingredientes
      const ingredients = ref([
        { id: 1, name: 'Queso', price: 1.5, selected: false },
        { id: 2, name: 'Pepperoni', price: 2.0, selected: false },
        { id: 3, name: 'Champiñones', price: 1.2, selected: false },
        { id: 4, name: 'Pimientos', price: 1.0, selected: false },
        { id: 5, name: 'Cebolla', price: 0.8, selected: false },
      ]);
  
      // Computar el precio total de los ingredientes seleccionados
      const totalPrice = computed(() => {
        return ingredients.value
          .filter(ingredient => ingredient.selected)
          .reduce((sum, ingredient) => sum + ingredient.price, 0)
          .toFixed(2);
      });
  
      // Actualizar la selección de ingredientes
      const updateSelected = (ingredient) => {
        ingredient.selected = !ingredient.selected;
      };
  
      return {
        ingredients,
        totalPrice,
        updateSelected,
      };
    },
  };
  </script>
  
  <style scoped>
  .ingredients-list {
    margin: 1rem 0;
  }
  
  .ingredient-item {
    margin: 0.5rem 0;
  }
  
  .total-price {
    font-weight: bold;
  }
  </style>
  