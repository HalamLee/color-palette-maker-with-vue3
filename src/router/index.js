import { createRouter, createWebHistory } from 'vue-router';
import PaletteView from '../views/PaletteView.vue';
import PaletteCreateView from '../views/PaletteCreateView.vue';
import PaletteEditView from '../views/PaletteEditView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PaletteView,
    },

    {
      path: '/create',
      name: 'paletteCreateView',
      component: PaletteCreateView,
    },
    {
      path: '/edit',
      name: 'paletteEditView',
      component: PaletteEditView,
    },
  ],
});

export default router;
