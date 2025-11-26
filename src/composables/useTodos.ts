import { ref } from 'vue'
import { onMounted } from 'vue'

import type { TodoItem } from '/TodoApi/Models/TodoItem.cs'




export function useTodos() { 
    
        const todos = ref<TodoItem[]>([])
        const loading = ref<boolean>(false)
        const error = ref<string | null>(null)

        // const API_BASE = 'http://localhost:3000/api'
        const API_BASE = 'https://localhost:7267/api'
        
        

        onMounted(() => {
            fetchTodos() 
        })
        async function fetchTodos() {
            loading.value = true
            error.value = null

        try {
            
            const response = await fetch(`${API_BASE}/TodoItems?delay=2000`)

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
                const response = await fetch(`${API_BASE}/TodoItems`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: text, completed: false })}
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
        async function toggleTodo(id: number) {
            loading.value = true
            error.value = null
            

            try {
                    const itemIndex = todos.value.findIndex(t => t.id === id)
                    if (itemIndex < 0) return

                    const updated = {
                        ...todos.value[itemIndex],
                        completed: !todos.value[itemIndex].completed
                    }

                const response = await fetch(`${API_BASE}/TodoItems/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updated)

                })

                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
                }

               todos.value[itemIndex] = updated
            } catch (e) {
                error.value = 'Kunde inte hämta todos'
                console.error('Fetch error:', e)
            } finally {
                loading.value = false
            }
        }

        async function deleteTodo(id: number) {
            loading.value = true
            error.value = null
            

            try {
                const response = await fetch(`${API_BASE}/TodoItems/${id}`, {
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

