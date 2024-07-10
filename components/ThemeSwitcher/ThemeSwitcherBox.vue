<template>
  <div
      class="w-[20px] h-[20px] bg-primary transition duration-300"
      :class="clsx(`${isActive ? 'p-[1px]' : 'p-[3px]'}`)"
  >
    <div class="w-1/2 h-full bg-background"></div>
  </div>
</template>

<script setup lang="ts">
import clsx from "clsx";

const props = defineProps<{
  isActive: boolean
}>()
</script>

<style scoped>

</style>