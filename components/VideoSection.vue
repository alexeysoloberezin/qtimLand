<template>
  <div>
    <div class="grid gap-3 gap-y-6 mt-[20px]" :class="clsx(styles[isGrid ? 'grid' : 'line'])">
      <a href="#" target="_blank" v-for="video in videos" class="videoItem">
        <LazyVideo :url="video.url" class="video rounded-lg"/>
        <div class="flex items-center gap-2 mt-2">
          <span class="mr-auto">{{ video.name }}</span>
          <span class="badge">{{ video.date }}</span>
          <span class="badge">{{ video.tag }}</span>
        </div>
      </a>
    </div>
  </div>
</template>


<script setup lang="ts">
import LazyVideo from "~/components/Video/LazyVideo.vue";
import clsx from "clsx";

const isGrid = ref(true)

const styles = {
  'grid': '2xl:grid-cols-2 grid-cols-1',
  'line': 'grid-cols-1'
}

const videos = [
  {
    url: 'https://api.qtim.pro//upload/iblock/e77/sijmklmr17ddlksgq788dc483r5ew0zv/%D0%A0%D0%B0%D0%B8%CC%86%D1%84%D1%84%D0%B0%D0%B8%CC%86%D0%B7%D0%B5%D0%BD.mp4',
    name: 'Райффайзен банк',
    date: '2022',
    tag: '1 месяц'
  },
  {
    url: 'https://api.qtim.pro//upload/iblock/880/nuw4xut4va23u1rfpp8pssgmwyvcey8y/%D0%9E%D0%BD%D0%BB%D0%B0%D0%B8%CC%86%D0%BD_%D1%88%D0%BA%D0%BE%D0%BB%D0%B0.mp4',
    name: 'Онлайн-школа №1',
    date: '2022',
    tag: '1 месяц'
  },
  {
    url: 'https://api.qtim.pro//upload/iblock/b64/rl788y2q5057tkcxv4uf8b1mgqt2hsrf/%D0%A1%20%D0%A2%D1%80%D0%B0%D0%B2%D0%BE%D0%B8%CC%86.mp4',
    name: 'РСХБ банк',
    date: '2022',
    tag: '1 месяц'
  },
  {
    url: 'https://api.qtim.pro//upload/iblock/afd/zi2zox2x39dienpth3x03z2rspb9nkgn/4frash_cover_01.mp4',
    name: '4fresh',
    date: '2022',
    tag: '1 месяц'
  },
  {
    url: 'https://api.qtim.pro//upload/iblock/bc0/0qdhfeozu97xt8tuu4qk44grt19ig26x/Joki_Joya_01.mp4',
    name: 'JoJo - online school',
    date: '2022',
    tag: '1 месяц'
  },
  {
    url: 'https://api.qtim.pro//upload/iblock/d79/kipop24fzrq62wsgk4a9qgfgb7t10ls7/%D1%81%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%BE_03.mp4',
    name: 'Сотворчество',
    date: '2022',
    tag: '1 месяц'
  },
]
</script>


<style  scoped lang="scss">
.videoItem{
  .video{
    border: 2px solid transparent;
    transition: border .3s ease-in-out;
  }
  &:hover{
    .video{
      border-color: var(--primary-color);
    }
  }
}
</style>