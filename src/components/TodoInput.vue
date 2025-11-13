<script setup lang="ts">
import { ref } from 'vue'
const newTodoText = ref('')
const emit = defineEmits<{
  addTodo: [text: string]
}>()

function handleSubmit() {
    if (newTodoText.value.trim() === '') {
        return 
    }
    emit('addTodo', newTodoText.value)
}

// Här ska du skriva din kod
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="newTodoText" placeholder="Vad behöver göras?" type="text"></input>
    <button type="submit">Lägg till</button>
    
  </form>
</template>

<style scoped>
</style>