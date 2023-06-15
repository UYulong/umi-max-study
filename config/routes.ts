export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
    icon: 'HomeOutlined',
  },
  {
    name: '测试页面',
    path: '/test',
    component: './Test',
    icon: 'MinusCircleOutlined',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
    icon: 'BorderOuterOutlined'
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
    icon: 'TableOutlined'
  },
  {
    path: '/category',
    name: '分类管理',
    icon: 'UngroupOutlined',
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
    icon: 'DesktopOutlined',
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
        hideInMenu: true,
      },
    ],
  },
  {
    path: '/goods',
    name: '商品管理',
    icon: 'ShopOutlined',
    routes: [
      {
        path: '/goods/list',
        name: '商品列表',
        component: './Goods/list/index.tsx',
      },
      {
        path: '/goods/publish',
        name: '商品发布',
        component: './Goods/publish/index.tsx',
      },
    ],
  },
]