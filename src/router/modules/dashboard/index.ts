import Layout from '@/layout/index.vue';

export default [
    {
        path: '/dashboard',
        component: Layout,
        redirect: '/dashboard/base',
        name: 'Dashboard',
        meta: {
            title: '仪表盘',
            icon: 'dashboard',
            sort: 1,
        },
        children: [
            {
                path: '/dashboard/base',
                component: () => import('@/pages/dashboard/base.vue'),
                name: 'DashboardBase',
                meta: {
                    title: '基础页',
                },
            },
            {
                path: '/dashboard/details',
                component: () => import('@/pages/dashboard/details.vue'),
                name: 'DashboardDetails',
                meta: {
                    title: '详情页',
                },
            },
        ],
    },
];
