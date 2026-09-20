<template>
  <div class="wid-card">
    <h2 class="wid-title">{{ title }}</h2>
    <h5 class="wid-sub-title">{{ subTitle }}</h5>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "Card Title",
  },
  subTitle: {
    type: String,
    default: "Card Sub Title",
  },
});
</script>

<style scoped>
.wid-card {
  width: 100%;
  /* flex: 1 ជួយឱ្យ Card ទាញកម្ពស់ពេញអេក្រង់ដែលនៅសល់ */
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-surface);
  color: var(--text-main);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 1rem;
  box-sizing: border-box;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.wid-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 0.25rem;
}

.wid-sub-title {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--text-muted);
  margin-bottom: 1rem;
}


</style>
