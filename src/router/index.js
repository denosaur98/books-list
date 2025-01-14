import { createWebHistory, createRouter } from 'vue-router'
import BooksList from '@/components/BooksList.vue'

const routes = [{ path: '/', component: BooksList }]

export default createRouter({
	history: createWebHistory(),
	routes,
})
