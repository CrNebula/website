import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import Home from '@/pages/Home.vue';
import SheetMetalFabrication from '@/pages/SheetMetalFabrication.vue';
import ProductIntroduction from '@/pages/ProductIntroduction.vue';
import CompanyProfile from '@/pages/CompanyProfile.vue';
import ProcessingCapacity from '@/pages/ProcessingCapacity.vue';
import ContactUs from '@/pages/ContactUs.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/sheet-metal',
    name: 'sheet-metal',
    component: SheetMetalFabrication,
  },
  {
    path: '/product',
    name: 'product',
    component: ProductIntroduction,
  },
  {
    path: '/company',
    name: 'company',
    component: CompanyProfile,
  },
  {
    path: '/processing',
    name: 'processing',
    component: ProcessingCapacity,
  },
  {
    path: '/materials',
    redirect: { name: 'company' },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUs,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});