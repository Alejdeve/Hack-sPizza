<template>
    <div class="pizza-resume">
      <h3>Resumen de tu Pizza</h3>
      <p>Masa: {{ selectedMasa }}</p>
      <p>Ingredientes: {{ selectedIngredients.join(', ') }}</p>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { usePizzaStore } from '../store/pizza';
  
  export default {
    setup() {
      const pizzaStore = usePizzaStore();
  
      const selectedMasa = computed(() => pizzaStore.selectedMasa);
      const selectedIngredients = computed(() => pizzaStore.selectedIngredients);
  
      return {
        selectedMasa,
        selectedIngredients,
      };
    },
  };
  </script>
  
  <style scoped>
  .pizza-resume {
    margin-top: 20px;
  }
  </style>
  