import { defineNuxtPlugin } from '#app';
import Vue3MaskDirective from 'vue-3-mask';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('mask', Vue3MaskDirective);
});
