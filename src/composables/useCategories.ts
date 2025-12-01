import { ref } from 'vue'
import { onMounted } from 'vue'

import type { CategoryItem } from '/TodoApi/Models/CategoryItem.cs'

export function useCategories() { 
    
        const categories = ref<CategoryItem[]>([])
        const loading = ref<boolean>(false)
        const error = ref<string | null>(null)

        // const API_BASE = 'http://localhost:3000/api'
        const API_BASE = 'https://localhost:7267/api'
        
        

        onMounted(() => {
            fetchCategories() 
        })

        async function fetchCategories() {
            loading.value = true
            error.value = null

        try {
            
            const response = await fetch(`${API_BASE}/Category?delay=2000`)

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            categories.value = await response.json()
        } catch (e) {
            error.value = 'Kunde inte hämta todos'
            console.error('Fetch error:', e)
        } finally {
            loading.value = false
        }
        }
        async function addCategory(name: string) {
            loading.value = true
            error.value = null

            try {
                const response = await fetch(`${API_BASE}/Category`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name: name })}
                )
                console.log(response)

                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
                }

                const newCategory = await response.json()
                categories.value.unshift(newCategory)
            } catch (e) {
                error.value = 'Kunde inte hämta kategorier'
                console.error('Fetch error:', e)
            } finally {
                loading.value = false
            }
        }

        async function deleteCategory(id: number) {
            loading.value = true
            error.value = null
            

            try {
                const response = await fetch(`${API_BASE}/Category/${id}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                })

                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
                }

                categories.value = categories.value.filter(t => t.id !== id)
            } catch (e) {
                error.value = 'Kunde inte hämta kategorier'
                console.error('Fetch error:', e)
            } finally {
                loading.value = false
            }
        }
    
    return {
        categories,
        loading,
        error,
        addCategory,
        fetchCategories,
        deleteCategory
    }
}