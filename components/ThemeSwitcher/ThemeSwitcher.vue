<template>
  <div class="flex themeSwitcher gap-4 items-center">
    <div class="uppercase">
      Тема
    </div>
    <div>
      <ThemeSwitcherBox :isActive="true" :class="activeTheme"/>
    </div>
    <div class="flex items-center overflow-hidden themeSwitcher-items">
      <button v-for="theme in themes" @click="setTheme(theme)"
              :class="`${theme} ${theme === activeTheme ? 'w-0' : ''}`"
              class="overflow-hidden"
      >
        <ThemeSwitcherBox :isActive="theme === activeTheme" class="mr-3"/>
      </button>
    </div>

    <div class="w-[32px] h-[32px] bg-primary rounded-full center cursor-pointer themeSwitcher-arrow">
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
  'dark-grey',
  'orange-red',
  'theme-blue'
]
</script>

<style scoped lang="scss">
.themeSwitcher{

  &-items{
    width: 0px;
    transition: width .4s ease-in-out;
  }
  &-arrow{
    transition: transform .4s ease-in-out;
  }

  &:hover{
    .themeSwitcher-arrow{
      transform: rotate(180deg);
    }
    .themeSwitcher-items{
      width: 160px;
    }
  }
}
</style>