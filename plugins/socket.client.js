import { io } from 'socket.io-client';
import {defineNuxtPlugin, useRuntimeConfig} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const socket = io(config.public.socketUrl);

  nuxtApp.provide('socket', socket);
});
