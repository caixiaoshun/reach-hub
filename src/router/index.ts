
import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import IntroductionView from '@/views/IntroductionView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import ProjectDetailView from '@/views/ProjectDetailView.vue';
import ContactView from '@/views/ContactView.vue';
import DatasetsView from '@/views/DatasetsView.vue';
import DatasetDetailView from '@/views/DatasetDetailView.vue';
// import NotFound from '@/views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Research Hub - Home' }
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: IntroductionView,
    meta: { title: 'About Our Research Group' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView,
    meta: { title: 'Project Showcase' }
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetailView,
    props: true,
    meta: { title: 'Project Details' }
  },
  {
    path: '/datasets',
    name: 'Datasets',
    component: DatasetsView,
    meta: { title: 'Datasets Showcase' }
  },
  {
    path: '/datasets/:id',
    name: 'DatasetDetail',
    component: DatasetDetailView,
    props: true,
    meta: { title: 'Dataset Details' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: 'Contact Us' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Page Not Found' }
  },
  // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title as string;
  } else {
    document.title = 'Research Hub';
  }
});

export default router;
