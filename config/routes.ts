export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '测试页面',
    path: '/test',
    component: './Test',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  {
    path: '/category',
    name: '分类管理',
    routes: [
      // { 
      //   path: '/category/list',
      //   name: '分类列表',
      //   component: '../src/pages/Category/list/index.tsx',
      // },
      { 
        path: '/category/publish',
        name: '分类列表',
        component: './Category/publish/index.tsx',
      },
    ],
  },
]