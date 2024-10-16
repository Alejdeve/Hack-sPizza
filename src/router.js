import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from './pages/Dashboard.vue';
import Auth from './pages/Auth.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';

const routes = [
  { 
    path: '/', 
    component: Auth,
    children: [
      { path: '', component: Login },
      { path: 'register', component: Register }
    ],
    meta: { requiresAuth: false }
  },
  { 
    path: '/dashboard', 
    component: Dashboard,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  // Aquí puedes agregar la lógica de autenticación cuando esté lista
  next();
});

export default router;

