<template>
  <div class="mt-auto">
    <div class="uppercase font-bold">наши клиенты</div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-4">
        <Peco/>
        <Sber/>
        <Peco/>
        <Sber/>
        <Peco/>
        <Sber/>
      </div>
      <div>
        <Button :size="'lg'" class="uppercase font-medium" @click="openModal">Оставить заявку</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Peco from "~/components/icons/partners/peco.vue";
import Sber from "~/components/icons/partners/sber.vue";
import Button from "~/components/Button.vue";

import {useContactUsModalStore} from "~/components/ContactUsModal/ContactUsModal";

const { openModal } = useContactUsModalStore();
</script>

<style scoped>

</style>