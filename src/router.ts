import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue' 
import TodosView from './views/TodosView.vue'
import TodoDetailView from './views/TodoDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { 
    path: '/TodoItems',
    name: 'todos',
    component: TodosView
  },
  { 
    path: '/TodoItems/:id',
    name: 'todoDetail',
    component: TodoDetailView
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})