import NotFoundView from './views/NotFound/NotFound.vue'

import IndexView from './views/Index/Index.vue'
import HomeView from './views/Index/Home.vue'
import AboutView from './views/Index/About.vue'

// Routes
const routes = [
  {
    path: '/',
    component: IndexView,
    redirect: '/home',
    children: [
      {path: '/home', component: HomeView},
      {path: '/about', component: AboutView}
    ]},
  {path: '*', component: NotFoundView}
]

export default routes
