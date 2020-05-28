import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import News from '../views/News';
import Source from '../views/Source.vue';
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: News,
      },
    {
        path: '/source/:name',
        name: 'Source',
        component: Source,
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
