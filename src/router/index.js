/*
 * @Author: jingmin-kuang
 * @Date: 2023-05-22 16:15:46
 * @LastEditTime: 2023-06-07 15:55:16
 * @LastEditors: jingmin-kuang
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Visual from '../layout/Visual'
import TemUser from '../layout/TemUser'
import Common from '@/components/common/Common'
// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    {
        path: '/csTest',
        name: 'index',
        props: true,
        component: () => import('@/layout/MainLayout')
    },
    {
        path: '/visual',
        component: Visual
    },
    {
        path: '/user',
        component: TemUser
    },
    {
        path: '/common',
        component: Common
    },
    {
        path: '/bigvisual',
        component: () => import('@/layout/BigVisual')
    },
    {
        path: '/cesiumdemo',
        component: () => import('@/layout/CesiumDemo')
    },
    {
        path: '/AntvL7',
        component: () => import('@/layout/AntvL7')
    },
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    // 默认是hash模式，如果要配置history模式需要后端做出相应的配置！！！参考vue-router官网
    // mode: process.env.VUE_APP_ROUTER_MODE,
    base: process.env.VUE_APP_API_CTX_PATH,
    scrollBehavior: () => ({ y: 0 }),
    routes // (缩写) 相当于 routes: routes
})


export default router;