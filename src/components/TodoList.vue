<script setup lang="ts">
import { TodoItem } from '/TodoApi/Models/TodoItem.cs'
import { computed } from 'vue'
import TodoItemFile from './TodoItemFile.vue'
import { ref } from 'vue'
import { CategoryItem } from '/TodoApi/Models/CategoryItem.cs'


const filteredTodos = computed(() => {
    if (searchTerm.value.trim() === '') {
        return props.todos;
    } else {
        return props.todos.filter(t => t.name.toLowerCase().includes(searchTerm.value))
    }
})



const searchTerm = ref('')
const props = defineProps<{ todos: TodoItem[], category: CategoryItem[] }>()
console.log(props.todos)

const emit = defineEmits<{
  toggleCompletion: [id: number]
  delete: [id: number]
}>()

function handleToggle(id: number) {
    emit('toggleCompletion', id) 
}

function handleDelete(id: number) {
    emit('delete', id)
}

function handleDeleteCategory(id: number) {
  console.log('delete category med id ' + id)
    emit('delete', id)
}

console.log(props.category)
</script>

<template>
  <div>
    <input v-model="searchTerm" type="text" placeholder="Sök todos..."></input>
    <TodoItemFile v-for="todo in filteredTodos" :key="todo.id" :todo="todo" @toggleCompletion="handleToggle" @delete="handleDelete">
        
    </TodoItemFile>


  </div>

</template>

