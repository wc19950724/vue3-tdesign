<template>
    <section class="t-layout__header-left">
        <t-breadcrumb :options="breadcrumbOptions">
            <template #separator>
                <slash-icon />
            </template>
        </t-breadcrumb>
    </section>
    <section class="t-layout__header-right">
        <t-space
            align="center"
            separator="|"
        >
            <t-switch
                v-model="themeMode"
                :customValue="['dark', 'light']"
                size="large"
            >
                <template #label="{value}: {value: typeof themeMode}">
                    <span :class="['iconfont', `icon-${value}`]"></span>
                </template>
            </t-switch>
            <t-dropdown
                :options="dropdownOptions"
                :hideAfterItemClick="false"
                trigger="click"
                maxColumnWidth="none"
                placement="left-top"
                @click="clickHandler"
            >
                <t-button
                    variant="text"
                >
                    {{ username }}
                </t-button>
            </t-dropdown>
        </t-space>
    </section>
</template>
<script lang="ts" setup>
import {
    SlashIcon,
} from 'tdesign-icons-vue-next';
import {
    DropdownOption, TdBreadcrumbItemProps,
} from 'tdesign-vue-next';
import {
    computed, ref, unref, watch,
} from 'vue';
import {
    useRoute,
} from 'vue-router';

import {
    getSettingStore,
    getUserStore,
} from '@/store';
import Auth from '@/utils/auth';

const { username } = Auth.getUserData();

const { logout } = getUserStore();

const { mode, updateConfig } = getSettingStore();

const themeMode = ref<GetType<SettingState, 'mode'>>(mode);

watch(
    () => unref(themeMode),
    (mode) => {
        updateConfig({
            mode,
        });
    },
    {
        immediate: true,
    },
);

const route = useRoute();

const breadcrumbOptions = computed<TdBreadcrumbItemProps[]>(() => route.matched.map((item, index) => ({
    content: (item.meta.title || '') as string,
    href: item.path,
    disabled: route.matched.length > 1 && index === 0,
})));

const dropdownOptions: DropdownOption[] = [
    {
        content: '个人中心',
        value: 'mine',
        disabled: true,
    },
    {
        content: '退出登陆',
        value: 'logout',
    },
];

const clickHandler = (item: DropdownOption) => {
    console.log(item.value);
    if (item.value === 'logout') {
        logout();
    }
};

</script>
