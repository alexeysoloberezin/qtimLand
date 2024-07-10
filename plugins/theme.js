import {defineNuxtPlugin} from "nuxt/app";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      setTheme: (theme) => {
        document.documentElement.className = theme;
      }
    }
  }
})
