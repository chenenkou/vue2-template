import IndexView from './views/Index/Index.vue';
import HomeView from './views/Index/Home.vue';

import NotFoundView from './views/NotFound/NotFound.vue';

// Routes
const routes = [
  { path: '/', component: IndexView, redirect: "/home", children: [
      { path: '/home', component: HomeView}
    ]},
  { path: '*', component: NotFoundView}
];

export default routes
