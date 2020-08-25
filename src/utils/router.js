import Taro from '@tarojs/taro'

const root = '/pages'

// 路由列表
export const routes = [
  //首页
  {
    path: 'index',
    component: '/index/index',
  },
  // 用户模块
  {
    path: 'user',
    component: '/user/verify/index',
  },
  {
    path: 'user/verify',
    component: '/user/verify/index',
  },
  // 数据获取
  {
    path: 'acquisition',
    redirect: 'acquisition/index' // 重定向至数据获取首页
  },
  {
    path: 'acquisition/index',
    component: '/acquisition/index/index'
  },
  {
    path: 'acquisition/image',
    redirect: 'acquisition/image/camera'
  },
  {
    path: 'acquisition/image/camera',
    component: '/acquisition/image/index'
  },
  {
    path: 'acquisition/image/preview',
    component: '/acquisition/imagePreview/index'
  },
  // 数据分析
  {
    path: 'analysis',
    redirect: 'analysis/index' // 重定向至数据分析首页
  },
  {
    path: 'analysis/index',
    component: '/analysis/index/index'
  },
  {
    path: 'analysis/diabetes',
    component: '/analysis/diabetes/index'
  },
  // 管理
  {
    path: 'management',
    redirect: 'management/index' // 重定向至管理首页
  },
  {
    path: 'management/index',
    component: '/management/index/index'
  },
  {
    path: 'management/origin',
    component: '/management/origin/index'
  },
  {
    path: 'management/patient',
    component: '/management/patient/index'
  },
  {
    path: 'management/observation',
    component: '/management/observation/index'
  },
  {
    path: 'management/encounter',
    component: '/management/encounter/index'
  },
  
]

//路由器
export const router = (path) => {
  const route = routes.find(item => item.path === path)
  if (route) {
    if(route.redirect)
      return router(route.redirect)
    return root + route.component
  }
  else {
    Taro.atMessage({ message: '路由错误', type: 'error' })
    return null
  }

}