import home from '@/views/home/index.vue';
import pixi from '@/views/pixi/index.vue';

export const routes = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: home,
      },
      {
        path: 'pixi',
        component: pixi,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/home',
  },
];

export default routes;
