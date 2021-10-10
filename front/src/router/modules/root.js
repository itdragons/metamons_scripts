export default [
    {
        path: '/',
        component: () => import(/* webpackChunkName: 'root' */ '@/views/metamask.vue')
    },
    {
        path: '/demo',
        component: () => import(/* webpackChunkName: 'root' */ '@/views/demo.vue')
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: 'root' */ '@/views/login.vue')
    }
]
