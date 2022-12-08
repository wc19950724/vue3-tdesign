import Layout from '@/layout/index.vue';

export default [
    {
        path: '/list',
        name: 'list',
        component: Layout,
        redirect: '/list/base',
        meta: { title: '列表页',
            icon: 'view-list' },
        children: [
            {
                path: '/list/base',
                name: 'ListBase',
                component: () => import('@/pages/list/base/index.vue'),
                meta: { title: '基础列表页' },
            },
            {
                path: '/list/card',
                name: 'ListCard',
                component: () => import('@/pages/list/card/index.vue'),
                meta: { title: '卡片列表页' },
            },
            {
                path: '/list/filter',
                name: 'ListFilter',
                component: () => import('@/pages/list/filter/index.vue'),
                meta: { title: '筛选列表页' },
            },
            {
                path: '/list/tree',
                name: 'ListTree',
                component: () => import('@/pages/list/tree/index.vue'),
                meta: { title: '树状筛选列表页' },
            },
        ],
    },
];
