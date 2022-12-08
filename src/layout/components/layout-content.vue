<template>
    <router-view v-slot="{ Component }">
        <transition
            name="fade"
            mode="out-in"
        >
            <keep-alive>
                <component :is="Component" />
            </keep-alive>
        </transition>
    </router-view>
</template>
<script lang="ts" setup></script>
<style lang="less" scoped></style>
