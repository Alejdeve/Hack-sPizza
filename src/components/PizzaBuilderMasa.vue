<template>
  <div class="pizza-builder-masa">
    <h3>Selecciona la Masa</h3>
    <select v-model="selectedMasa">
      <option v-for="masa in masas" :key="masa" :value="masa">{{ masa }}</option>
    </select>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const masas = ['Delgada', 'Gruesa', 'Sin gluten'];
    const selectedMasa = ref(masas[0]);

    return {
      masas,
      selectedMasa,
    };
  },
};
</script>

<style scoped>
.pizza-builder-masa {
  margin: 20px 0;
}
</style>
