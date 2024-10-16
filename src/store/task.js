import { defineStore } from 'pinia'
import { supabase } from '../supabase'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: []
  }),
  actions: {
    async fetchTasks() {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('id', { ascending: false })
      if (error) throw error
      this.tasks = data
    },
    async addTask(title) {
      const { data, error } = await supabase
        .from('tasks')
        .insert([{ title, is_complete: false, user_id: this.user.id }])
      if (error) throw error
      this.tasks.push(data[0])
    },
    async updateTask(id, updates) {
      const { error } = await supabase
        .from('tasks')
        .update(updates)
        .match({ id })
      if (error) throw error
      this.fetchTasks()
    },
    async deleteTask(id) {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .match({ id })
      if (error) throw error
      this.fetchTasks()
    }
  }
})