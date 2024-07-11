<template>
  <button class="rounded-full " :class="clsx(classes[colorRef], sizes[sizeRef])">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import clsx from "clsx";

const props = defineProps<{
  color?: 'main' | 'reverse', 'main-outline',
  size? : 'main' | 'md' | 'lg' | 'xl'
}>()

const colorRef = props.color || 'main'
const sizeRef = props.size || 'main'

const sizes = {
  'main': 'py-2 px-4',
  'md': 'py-4 px-5 text-sm',
  'xl': 'py-4 px-5 text-md',
  'lg': 'text-md py-5 px-6'
}

const classes = {
  'reverse': 'bg-background text-primary',
  'main': 'bg-primary text-background',
  'main-outline': 'border-primary text-primary'
}
</script>

<style scoped>

</style>