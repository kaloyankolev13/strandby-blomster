import { createRouter, createWebHistory } from 'vue-router';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () =>
      import(/* webpackChunkName: "products" */ '../views/ProductsView.vue'),
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/ProductView.vue'),
  },
  {
    path: '/help',
    name: 'help',
    component: () =>
      import(/* webpackChunkName: "help" */ '../views/HelpView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () =>
      import(/* webpackChunkName: "admin" */ '../views/Admin/AdminView.vue'),
  },
  {
    path: '/admin/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Admin/LoginView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = Cookies.get('token');

  // eslint-disable-next-line no-use-before-define
  if (to.meta.requiresAuth && (!token || isTokenExpired(token))) {
    next({ name: 'login' }); // Redirect to the login page
  } else {
    next(); // Continue to the next route
  }
});

function isTokenExpired(token) {
  const decodedToken = jwtDecode(token);
  return decodedToken.exp < Date.now() / 1000; // check if the token has expired
}

export default router;
