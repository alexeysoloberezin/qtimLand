<template>
  <div class="flex gap-4 items-center">
    <div class="uppercase">
      Тема
    </div>
    <div class="flex items-center gap-3">
      <button v-for="theme in themes" @click="setTheme(theme)" :class="theme" >
        <ThemeSwitcherBox :isActive="theme === activeTheme"/>
      </button>
    </div>

    <div class="w-[32px] h-[32px] bg-primary rounded-full center cursor-pointer">
      <ArrowBack class="fill-bg"/>
    </div>
    <Button class="font-medium font2">
      Выбери свою тему
    </Button>
  </div>
</template>

<script setup lang="ts">
import ThemeSwitcherBox from "~/components/ThemeSwitcher/ThemeSwitcherBox.vue";
import {useStorage} from "@vueuse/core";
import ArrowBack from "~/components/icons/ArrowBack.vue";
import Button from "~/components/Button.vue";

const {$setTheme}: any = useNuxtApp()

const setTheme = (theme: any) => {
  activeTheme.value = theme
  $setTheme(theme)
}

const activeTheme = useStorage('theme', 'main')

const themes = [
  'main',
  'dark',
  'theme-blue'
]
</script>

<style scoped>

</style>