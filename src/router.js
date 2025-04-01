import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth'; 
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
import Dashboard from './views/Dashboard.vue';

const routes = [
  { path: '/', redirect: '/dashboard' }, 
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
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

// **Navigation Guard**
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login'); 
  } else {
    next(); 
  }
});

export default router;
