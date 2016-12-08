import NotFoundView from './pages/NotFound/NotFound.vue'

import IndexView from './pages/Index/Index.vue'
import HomeView from './pages/Index/Home.vue'
import AboutView from './pages/Index/About.vue'

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
