<template>
  <div class="pizza-builder">
    <h2>Constructor de Pizza</h2>
    <PizzaBuilderMasa />
    <PizzaIngredients />
    <PizzaResume />
  </div>
</template>

<script>
import PizzaBuilderMasa from './PizzaBuilderMasa.vue';
import PizzaIngredients from './PizzaIngredients.vue';
import PizzaResume from './PizzaResume.vue';

export default {
  components: {
    PizzaBuilderMasa,
    PizzaIngredients,
    PizzaResume,
  },
};
</script>

<style scoped>
.pizza-builder {
  padding: 20px;
}
</style>
