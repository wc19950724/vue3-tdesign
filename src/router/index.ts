import {
    createRouter, createWebHistory, RouteRecordRaw,
} from 'vue-router';

// 自动导入modules文件夹下所有ts文件
const modules = import.meta.glob('./modules/**/*.ts', {
    eager: true,
});

// 动态路由
export const dynamicRoutes: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
    // @ts-ignore
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    dynamicRoutes.push(...modList);
});

/**
 * 排序 - 默认路由文件首字母先后顺序
 * 定义方式: meta: { sort: number }
 * sort越小越靠前
 */
dynamicRoutes.sort((a, b) => {
    const { sort: sortA = 999 }: { sort?: number } = a.meta || {};
    const { sort: sortB = 999 }: { sort?: number } = b.meta || {};
    return sortA - sortB;
});

// 静态路由
const staticRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/pages/login/index.vue'),
    },
    {
        path: '/',
        redirect: '/dashboard/base',
    },
    {
        path: '/:w+',
        name: '404Page',
        meta: { title: '访问页面不存在页' },
        component: () => import('@/pages/result/404/index.vue'),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes: [...staticRoutes, ...dynamicRoutes],
});
