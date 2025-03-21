import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MyInklingsView from '@/views/MyInklingsView.vue'
import NewPostView from '@/views/NewPostView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import store from '@/store'
import { useToast } from 'vue-toastification';

const toast =useToast();

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes :[
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      // Force user to login before entering profile page
      beforeEnter: (to, from, next) => {
        if (!store.getters.isUserLoggedIn) {
          toast.error('Whoops! You need to log in to view this page.');
          // Delay the redirect to allow the toast to show
          setTimeout(() => {
            next('/login');  // Redirect to login page after the toast
          }, 1000); 
          
        } else {
          next();
        }
      }
    },
    {
      path: '/my-inklings',
      name: 'my-inklings',
      component:MyInklingsView,
      // Force user to login before entering my inkling page
      beforeEnter: (to, from, next) => {
        if (!store.getters.isUserLoggedIn) {
          toast.error('Whoops! You need to log in to view this page.');
          // Delay the redirect to allow the toast to show
          setTimeout(() => {
            next('/login');  // Redirect to login page after the toast
          }, 1000); 
          
        } else {
          next();
        }
      },
    },
    {
      path: '/new-post',
      name: 'new-post',
      component: NewPostView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: RegisterView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUsView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ]
});

export default router
