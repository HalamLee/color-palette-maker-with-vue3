import { createRouter, createWebHistory } from 'vue-router';
import PaletteView from '../views/PaletteView.vue';
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
      path: '/edit',
      name: 'paletteEditView',
      component: PaletteEditView,
    },
  ],
});

export default router;
