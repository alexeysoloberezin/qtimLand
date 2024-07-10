<template>
  <div class="flex items-start">
    <div>
      <Header />

      <div class="title font2 uppercase">
        Вписываемся <br/>
        в&nbsp;самые смелые проекты
      </div>
    </div>

    <div class="min-h-[500px] bg-primary w-[30vw] rounded-large"></div>

  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<style scoped>
.title{
  font-size: 220px;
  line-height: 0.85;
}
</style>