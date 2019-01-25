// ref: https://umijs.org/config/
import { primaryColor } from '../src/defaultSettings';
export default {
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: { hmr: true },
        targets: { ie: 11 },
        locale: {
          enable: true,
          // default false
          default: 'zh-CN',
          // default zh-CN
          baseNavigator: true,
        },
        // default true, when it is true, will use `navigator.language` overwrite default
        dynamicImport: { loadingComponent: './components/PageLoading/index' },
      },
    ],
    [
      'umi-plugin-pro-block',
      {
        moveMock: false,
        moveService: false,
        modifyRequest: true,
        autoAddMenu: true,
      },
    ],
  ],
  targets: { ie: 11 },
  /**
   * 路由相关配置
   */
  routes: [
   
    {
      path: '/s',
      component: '../layouts/UserLayout',
      routes: [
        {
          path: '/s',
          component: './S',
        },
      ],
    },
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          path: '/user',
          component: './Welcome',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/BasicLayout',
      routes: [
        {
          path: '/',
          redirect: '/welcome/analysis',
        },
        // dashboard
        {
          path: '/welcome',
          name: 'welcome',
          icon: 'smile',
          children: [
            {
              name: '分析页',
              path: '/welcome/analysis',
            },
            {
              name: '监控页',
              path: '/welcome/kk',
            },
            {
              name: '工作台',
              path: '/welcome/workplace',
              // hideInBreadcrumb: true,
              // hideInMenu: true,
            },
          ],
        },
        // {
        //   path: 'https://github.com/umijs/umi-blocks/tree/master/ant-design-pro',
        //   name: 'more-blocks',
        //   icon: 'block',
        // },
        {
          name: 'monitor',
          icon: 'smile',
          path: '/monitor',
          component: './monitor',
        },
        {
          path: '/welcome/workplace',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/welcome/workplace',
              component: './S',
            },
          ],
        },
        {
          path: '/welcome/kk',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/welcome/kk',
              component: './S',
            },
          ],
        },
        {
          path: '/welcome/analysis',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/welcome/analysis',
              component: './S',
            },
          ],
        },
      ],

    },
  ],
  disableRedirectHoist: true,
  /**
   * webpack 相关配置
   */
  define: { APP_TYPE: process.env.APP_TYPE || '' },
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme: { 'primary-color': primaryColor },
  externals: { '@antv/data-set': 'DataSet' },
  ignoreMomentLocale: true,
  lessLoaderOptions: { javascriptEnabled: true },
};
