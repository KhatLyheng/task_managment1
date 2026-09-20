<template>
    <div class="home-layout">
        <AppHeader @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />
        <AppSidebar :is-open="isSidebarOpen" @close-sidebar="isSidebarOpen = false" />
    </div>
    <main class="app-main">
        <router-view></router-view>
    </main>
</template>
<script setup>
import { ref } from "vue";
import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";
const isSidebarOpen = ref(false);
</script>
<style scoped>
.app-main {
    margin-left: var(--sidebar-width);
    margin-top: var(--header-height);
    padding: 1rem;
    /* កំណត់កម្ពស់ពេញអេក្រង់ ដោយដក Header ចេញ */
    height: calc(100vh - var(--header-height));
    /* អនុញ្ញាតឱ្យ Scroll តែក្នុង Content នេះប៉ុណ្ណោះ */
    overflow-y: auto;
    /* ប្រើ Flexbox ដើម្បីឱ្យ Wid.vue រីកពេញកម្ពស់ */
    display: flex;
    flex-direction: column;
    background-color: var(--bg-app);
    box-sizing: border-box;
    transition: margin-left 0.3s ease;
}

@media (max-width: 768px) {
    .app-main {
        margin-left: 0;
        padding: 1rem;
    }
}
</style>