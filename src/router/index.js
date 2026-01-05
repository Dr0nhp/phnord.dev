import {createRouter, createWebHistory} from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import TrackerPage from '../views/TrackerPage.vue'
import CraftingCalcPage from '../views/CraftingCalcPage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/tracker',
        name: 'Tracker',
        component: TrackerPage
    },
    {
        path: '/crafting-calc',
        name: 'CraftingCalc',
        component: CraftingCalcPage
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router