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
  {
    path: '/banner',
    name: '轮播图',
    routes: [
      {
        path: '/banner/list',
        name: '轮播列表',
        component: './Banner/list/index.tsx',
      },
      {
        path: '/banner/publish',
        name: '轮播图新增',
        component: './Banner/publish/index.tsx',
      },
      {
        path: '/banner/edit',
        name: '轮播图维护',
        component: './Banner/edit/index.tsx',
      },
    ],
  },
]