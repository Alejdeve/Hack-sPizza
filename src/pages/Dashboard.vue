<template>
  <div>
    <h1>Dashboard</h1>
    <button @click="userStore.signOut">Cerrar sesión</button>
    <form @submit.prevent="addTask">
      <input v-model="newTask" placeholder="Nueva tarea" required>
      <button type="submit">Añadir tarea</button>
    </form>
    <ul>
      <li v-for="task in taskStore.tasks" :key="task.id">
        <input
          type="checkbox"
          :checked="task.is_complete"
          @change="updateTask(task.id, { is_complete: !task.is_complete })"
        >
        <span :class="{ completed: task.is_complete }">{{ task.title }}</span>
        <button @click="updateTask(task.id, { title: prompt('Editar tarea', task.title) })">Editar</button>
        <button @click="deleteTask(task.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '../store/user'
import { useTaskStore } from '../store/task'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
console.log('Usuario actual:', userStore.user);
const taskStore = useTaskStore()

const { user } = storeToRefs(userStore)
const newTask = ref('')

onMounted(() => {
  taskStore.fetchTasks()
})

const addTask = () => {
  taskStore.addTask(newTask.value)
  newTask.value = ''
}

const updateTask = (id, updates) => {
  taskStore.updateTask(id, updates)
}

const deleteTask = (id) => {
  taskStore.deleteTask(id)
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>