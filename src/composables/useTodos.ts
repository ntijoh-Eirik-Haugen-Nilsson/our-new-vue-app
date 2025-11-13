import { ref } from 'vue'
import { onMounted } from 'vue'

import type { Todo } from '../types/api-types'




export function useTodos() { 
    
        const todos = ref<Todo[]>([])
        const loading = ref<boolean>(false)
        const error = ref<string | null>(null)

        const API_BASE = 'http://localhost:3000/api'
        

        onMounted(() => {
            fetchTodos() 
        })
        async function fetchTodos() {
            loading.value = true
            error.value = null

        try {
            
            const response = await fetch(`${API_BASE}/todos?delay=2000`)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            todos.value = await response.json()
        } catch (e) {
            error.value = 'Kunde inte hämta todos'
            console.error('Fetch error:', e)
        } finally {
            loading.value = false
        }
    }
        async function addTodo(text: string) {
            loading.value = true
            error.value = null

            try {
                const response = await fetch(`${API_BASE}/todos`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text, completed: false })}
                )

                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
                }

                const newTodo = await response.json()
                todos.value.unshift(newTodo)
            } catch (e) {
                error.value = 'Kunde inte hämta todos'
                console.error('Fetch error:', e)
            } finally {
                loading.value = false
            }
        }
        async function toggleTodo(id: string) {
            loading.value = true
            error.value = null
            

            try {
                const response = await fetch(`${API_BASE}/todos/${id}`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' }
                })

                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
                }

                const updatedTodo = await response.json()
                const itemIndex : number = todos.value.findIndex(t => t.id === id)
                if (itemIndex !== -1) {
                    todos.value[itemIndex] = updatedTodo
                }
            } catch (e) {
                error.value = 'Kunde inte hämta todos'
                console.error('Fetch error:', e)
            } finally {
                loading.value = false
            }
        }

        async function deleteTodo(id: string) {
            loading.value = true
            error.value = null
            

            try {
                const response = await fetch(`${API_BASE}/todos/${id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                })

                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
                }

                todos.value = todos.value.filter(t => t.id !== id)
            } catch (e) {
                error.value = 'Kunde inte hämta todos'
                console.error('Fetch error:', e)
            } finally {
                loading.value = false
            }
        }
    return {
        todos,
        loading,
        error,
        addTodo,
        fetchTodos,
        deleteTodo,
        toggleTodo

    }

} 

