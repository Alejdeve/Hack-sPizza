<template>
    <div>
      <h2>Resumen de la Pizza</h2>
      <div class="pizza-details">
        <h3>Ingredientes Seleccionados:</h3>
        <ul>
          <li v-for="ingredient in selectedIngredients" :key="ingredient.id">
            {{ ingredient.name }}
          </li>
        </ul>
        <p>Total: {{ totalPrice }} $</p>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { usePizzaStore } from '../store/pizza'; // Asegúrate de que esta ruta sea correcta
  
  export default {
    setup() {
      const pizzaStore = usePizzaStore();
  
      // Suponiendo que pizzaStore tiene la información de la pizza
      const selectedIngredients = computed(() => {
        return pizzaStore.ingredients.filter(ingredient => ingredient.selected);
      });
  
      const totalPrice = computed(() => {
        return selectedIngredients.value.reduce((total, ingredient) => {
          return total + ingredient.price;
        }, 0).toFixed(2);
      });
  
      return {
        selectedIngredients,
        totalPrice,
      };
    },
  };
  </script>
  
  <style scoped>
  .pizza-details {
    margin-top: 1rem;
  }
  </style>
  