<template>
    <template
        v-for="item in menu"
        :key="item.path"
    >
        <t-menu-item
            v-if="!item.children || !item.children.length"
            :to="item.path"
            :value="item.path"
        >
            <template
                v-if="item.meta?.icon"
                #icon
            >
                <t-icon :name="item.meta?.icon" />
            </template>
            {{ item.meta?.title }}
        </t-menu-item>
        <t-submenu
            v-else
            :title="item.meta?.title"
            :value="item.path"
        >
            <template #icon>
                <t-icon :name="item.meta?.icon" />
            </template>
            <menu-content :menu="item.children"></menu-content>
        </t-submenu>
    </template>
</template>
<script lang="ts" setup>
import {
    RouteRecordRaw,
} from 'vue-router';

withDefaults(
    defineProps<{
        menu: RouteRecordRaw[];
    }>(),
    {
        menu: () => [],
    },
);
</script>
