
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
    meta: { title: '研究中心 - 首页' }
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: IntroductionView,
    meta: { title: '关于研究中心' }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsView,
    meta: { title: '项目展示' }
  },
  {
    path: '/projects/:id',
    name: 'ProjectDetail',
    component: ProjectDetailView,
    props: true,
    meta: { title: '项目详情' }
  },
  {
    path: '/datasets',
    name: 'Datasets',
    component: DatasetsView,
    meta: { title: '数据集展示' }
  },
  {
    path: '/datasets/:id',
    name: 'DatasetDetail',
    component: DatasetDetailView,
    props: true,
    meta: { title: '数据集详情' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: { title: '联系我们' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: '页面未找到' }
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
