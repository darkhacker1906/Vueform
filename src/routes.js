import { createWebHistory, createRouter } from 'vue-router';
import LoginComp from './components/LoginComp.vue';
import SignUp from './components/SignUp.vue';
import Homepage from './components/pages/Homepage.vue'
import {auth} from './firebase'
const routes = [
  { path: '/', component: LoginComp,meta:{auth:false} },
  { path: '/signup', component: SignUp ,meta:{auth:false}},
  {path:'/homepage' , component:Homepage,meta:{auth:true}}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.auth);
    const currentUser = auth.currentUser; 
    
    if (requiresAuth && !currentUser) {
      next('/');
    } else if (!requiresAuth && currentUser) {
      next('/homepage');
    } else {
      next();
    }
  });
  

export default router;
