import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import News from '../views/News';
import History from '../views/History';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
      },
    {
        path: '/news/:title',
        name: 'News',
        component: News,
      },
    {
        path: '/history',
        name: 'History',
        component: History,
      },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
  });

export default router;
