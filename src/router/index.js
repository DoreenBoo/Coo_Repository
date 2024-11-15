import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import HelloOFY from '../components/HelloOFY.vue';

const routes = [
    {
        path: '/',
        name: 'HelloOFY',
        component: HelloOFY,
        props: { title: 'ONLY FOR YOU' },
    },
    {
        path: '/home',
        name: 'HomePage',
        component: HomePage, 
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
