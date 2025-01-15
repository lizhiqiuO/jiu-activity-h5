export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          keepAlive: true,
        },
      },
    ],
  },
  // 匹配不到重定向会主页
  {
    // 找不到路由重定向到404页面
    path: '/:pathMatch(.*)',
    redirect: '/Home',
  },
];

export default routes;
