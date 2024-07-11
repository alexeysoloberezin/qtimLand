<template>
  <div class="card p-[24px]">
    <div v-if="title">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string,
}>()
</script>

<style scoped>

</style>