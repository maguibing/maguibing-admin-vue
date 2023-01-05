/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-12-12 10:07:18
 * @FilePath: \alien-docsf:\vue-project\alien-vue-admin\src\router\modules\demo.js
 */

/* Layout */
import Layout from '@/layout'
import AlineComponent from './aline-component'

const doms = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '仪表面板',
      icon: 'dashboard'
    },
    children: [
      {
        path: 'workbench',
        component: () => import('@/views/dashboard/workbench/index'),
        name: 'Workbench',
        meta: { title: '工作台', icon: 'dashboard' }
      },
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '数据分析', icon: 'dashboard', affix: true }
      },
      {
        path: 'monitor',
        component: () => import('@/views/dashboard/monitor/index'),
        name: 'Monitor',
        meta: { title: '监控页面', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/system-message',
    component: Layout,
    redirect: '/user',
    meta: {
      title: '系统管理',
      icon: 'hardware'
    },
    children: [
      {
        path: 'user-message',
        component: () => import('@/views/system-message/user-message'),
        name: 'UserMessage',
        meta: { title: '用户管理', icon: 'user' }
      },
      {
        path: 'role-message',
        component: () => import('@/views/system-message/role-message'),
        name: 'RoleMessage',
        meta: { title: '角色管理', icon: 'user' }
      },
      {
        path: 'menu-message',
        component: () => import('@/views/system-message/menu-message'),
        name: 'MenuMessage',
        meta: { title: '菜单管理', icon: 'user' }
      },
      {
        path: 'branch-message',
        component: () => import('@/views/system-message/branch-message'),
        name: 'BranchMessage',
        meta: { title: '部门管理', icon: 'user' }
      },
      {
        path: 'position-message',
        component: () => import('@/views/system-message/position-message'),
        name: 'PositionMessage',
        meta: { title: '职位管理', icon: 'user' }
      },
      {
        path: 'dict-message',
        component: () => import('@/views/system-message/dict-message'),
        name: 'DictMessage',
        meta: { title: '字典管理', icon: 'user' }
      },
      {
        path: 'login-log-message',
        component: () => import('@/views/system-message/login-log-message'),
        name: 'LoginLogMessage',
        meta: { title: '登录日志', icon: 'user' }
      },
      {
        path: 'busine-log-message',
        component: () => import('@/views/system-message/busine-log-message'),
        name: 'BusineLogMessage',
        meta: { title: '业务日志', icon: 'user' }
      }

    ]
  },
  {
    path: '/form',
    component: Layout,
    redirect: '/base',
    meta: {
      title: '数据表单',
      icon: 'category'
    },
    children: [
    //   {
    //     path: 'base',
    //     component: () => import('@/views/form/form-base'),
    //     name: 'Base',
    //     meta: { title: '基础表单', icon: 'tab' }
    //   },
    //   {
    //     path: 'custom',
    //     component: () => import('@/views/form/form-base-custom'),
    //     name: 'Custom',
    //     meta: { title: '标签自定义', icon: 'tab' }
    //   },
      {
        path: 'steps',
        component: () => import('@/views/form/form-steps'),
        name: 'Steps',
        meta: { title: '步骤表单', icon: 'tab' }
      },
      {
        path: 'quill-editor',
        component: () => import('@/views/form/form-quill-editor'),
        name: 'QuillEditor',
        meta: { title: '可复制网页内容', icon: 'tab' }
      },
      {
        path: 'quill-editor-content',
        component: () => import('@/views/form/form-quill-editor-conent'),
        name: 'QuillEditorContent',
        meta: { title: '富文本编辑器', icon: 'tab' }
      },
      {
        path: 'info',
        component: () => import('@/views/form/form-info'),
        name: 'Info',
        meta: { title: '表单详情', icon: 'tab' }
      },
      {
        path: 'create-user',
        component: () => import('@/views/form/form-create-user'),
        name: 'CreateUser',
        meta: { title: '创建表单', icon: 'tab' }
      },
      {
        path: 'table-search',
        component: () => import('@/views/form/form-table-search'),
        name: 'TableSearch',
        meta: { title: '高级查询', icon: 'tab' }
      }
    ]
  },
  {
    path: '/icon',
    component: Layout,
    redirect: '/index',
    meta: {
      title: '图标库',
      icon: 'favorites-fill'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/element-ui-icon'),
        name: 'Icons',
        meta: { title: 'Element-ui-icon', icon: 'icon' }
      },
      {
        path: 'iconfont',
        component: () => import('@/views/icons/iconfont-icon'),
        name: 'Icons',
        meta: { title: '阿里云图标', icon: 'icon' }
      },
    //   {
    //     path: 'iconfont-colour',
    //     component: () => import('@/views/icons/iconfont-colour'),
    //     name: 'Icons',
    //     meta: { title: '彩色图标', icon: 'icon' }
    //   }
    ]
  },
  ...AlineComponent,
  {
    path: '/content-search',
    component: Layout,
    redirect: '/article',
    meta: {
      title: '搜索页面',
      icon: 'search'
    },
    children: [
      {
        path: 'article',
        component: () => import('@/views/content-search/article'),
        name: 'Article',
        meta: { title: '搜索文章', icon: 'tab' }
      },
      {
        path: 'project',
        component: () => import('@/views/content-search/project'),
        name: 'Project',
        meta: { title: '搜索项目', icon: 'tab' }
      },
      {
        path: 'appliction',
        component: () => import('@/views/content-search/appliction'),
        name: 'Appliction',
        meta: { title: '搜索应用', icon: 'tab' }
      }
    ]
  },
  {
    path: '/result',
    component: Layout,
    redirect: '/success',
    meta: {
      title: '反馈页面',
      icon: 'annotation'
    },
    children: [
    //   {
    //     path: 'success',
    //     component: () => import('@/views/result/success'),
    //     name: 'Success',
    //     meta: { title: '成功页面', icon: 'tab' }
    //   },
    //   {
    //     path: 'warning',
    //     component: () => import('@/views/result/warning'),
    //     name: 'Warning',
    //     meta: { title: '警告页面', icon: 'tab' }
    //   },
    //   {
    //     path: 'error',
    //     component: () => import('@/views/result/error'),
    //     name: 'Error',
    //     meta: { title: '错误页面', icon: 'tab' }
    //   },
      {
        path: '403',
        component: () => import('@/views/result/403'),
        name: 'Error403',
        meta: { title: '403页面', icon: 'tab' }
      },
      {
        path: '404',
        component: () => import('@/views/result/404'),
        name: 'Error404',
        meta: { title: '404页面', icon: 'tab' }
      },
      {
        path: '500',
        component: () => import('@/views/result/500'),
        name: 'Error500',
        meta: { title: '500页面', icon: 'tab' }
      }
    ]
  }
]

export default doms
