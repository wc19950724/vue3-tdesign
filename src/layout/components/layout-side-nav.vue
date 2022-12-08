<template>
    <t-menu
        v-model:expanded="expanded"
        :theme="settingStore.displayMode"
        :collapsed="collapsed"
        :value="menuValue"
    >
        <template #logo>
            <span
                :class="`${prefix}-side-nav-logo-wrapper`"
                @click="$router.push('/')"
            >
                <component
                    :is="getLogo()"
                    :class="`${prefix}-side-nav-logo-${collapsed ? 't' : 'tdesign'}-logo`"
                />
            </span>
        </template>
        <menu-content :menu="dynamicRoutes" />
        <template #operations>
            <t-icon
                class="t-menu__operations-icon"
                :name="iconName"
                @click="changeCollapsed"
            />
            <template v-if="!collapsed">
                {{ name }} {{ version }}
            </template>
        </template>
    </t-menu>
</template>
<script lang="ts" setup>
import {
    name, version,
} from '@package';
import {
    computed, ref,
} from 'vue';

import AssetLogoFull from '@/assets/assets-logo-full.svg?component';
import AssetLogo from '@/assets/assets-t-logo.svg?component';
import {
    prefix,
} from '@/config/global';
import router, {
    dynamicRoutes,
} from '@/router';
import {
    getSettingStore,
} from '@/store';

import MenuContent from './menu-content.vue';

const settingStore = getSettingStore();

const currentPath = computed(() => router.currentRoute.value.path);

const expanded = ref([
    currentPath.value.substring(0, currentPath.value.lastIndexOf('/')),
]);
const menuValue = currentPath;

const collapsed = ref(false);
const iconName = computed(() => (collapsed.value ? 'chevron-right' : 'chevron-left'));
const changeCollapsed = () => {
    collapsed.value = !collapsed.value;
};

const getLogo = () => {
    if (collapsed.value) return AssetLogo;
    return AssetLogoFull;
};
</script>
