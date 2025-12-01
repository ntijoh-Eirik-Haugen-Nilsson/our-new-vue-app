<script setup lang="ts">
import { ref } from 'vue'
import { Category } from '/src/types.ts'
const newTodoText = ref('')
const newCategoryText = ref('')


const props = defineProps<{ category: Category }>()
const emit = defineEmits<{
  (event: 'addCategory', name: string): void
  (event: 'addTodo', name: string, category: string): void
}>()



function handleSubmit() {
    if (newTodoText.value.trim() === '') {
        return 
    }
    emit('addCategory', newCategoryText.value)
    emit('addTodo', newTodoText.value, newCategoryText.value)
}



</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="newTodoText" placeholder="Vad behöver göras?" type="text"></input>
   <input v-model="newCategoryText" placeholder="Kategori" type="text"></input>
    
    <select>
      <option></option>
    </select>
    <button style="background-color: green; margin: 10px" type="submit">Lägg till</button>
  </form>
</template>

<style scoped>
</style>