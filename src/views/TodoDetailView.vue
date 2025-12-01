<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTodos } from '../composables/useTodos'

const route = useRoute()
const todoId = route.params.id // hämta id från routen

const { todos, loading, error } = useTodos()


const todo = computed(() => {
    return todos.value.find(t => t.id == todoId) || null
})
</script>

<template>
    
    <h2 v-if="!loading && !error"><strong>ID: </strong>{{todo?.id}}</h2>
    <h2 v-if="!loading && !error"><strong>Text: </strong>{{todo?.name}}</h2>
    <h2 v-if="!loading && !error"><strong>Status: </strong>{{todo?.completed}}</h2>
    <h2 v-if="!loading && !error"><strong>Category: </strong>{{todo?.category}}</h2>
    <div v-if="loading">Laddar...</div>
    <div v-if="error">Whops!</div>
    
    <router-link :to="{name: 'todos'}">← Back</router-link>
</template>