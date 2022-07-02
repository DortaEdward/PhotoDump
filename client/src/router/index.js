import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserAccessView from '../views/UserAccessView.vue';

/* eslint-disable */

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/',
    name: 'userAccess',
    component: UserAccessView,
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to) => {
  if (!localStorage.getItem('token') && to.name !== 'userAccess') {
    return { name: 'userAccess' };
  }else if (localStorage.getItem('token') && to.name === 'login') {
    return { name: 'home' };
  }
});

export default router;
