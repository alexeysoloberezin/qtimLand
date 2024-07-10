<template>
  <div class="flex flex-col gap-4">
    <h3 class="subtitle">О нас</h3>

    <div class="flex gap-4"
      :class="!isBig ? 'flex-col' : 'flex-row'"
    >
      <h4 class="subtitle-2 mt-3">Разрабатываем проекты любой сложности</h4>

      <div class="bg-background p-[20px] text-primary rounded-xl min-w-[250px]">
        <div class="uppercase  font-medium">Проектов</div>
        <div class="number text-center mb-5">249</div>
      </div>
    </div>

    <img src="/public/1.jpg" class="rounded-md mt-[20px] aspect-[4/3] object-cover" alt="">
    <div class="grid grid-cols-2 gap-3 ">
      <img src="/public/2.jpg" class="rounded-md aspect-[4/3] object-cover" alt="">
      <img src="/public/3.jpg" class="rounded-md aspect-[4/3] object-cover" alt="">
    </div>


    <h4 class="subtitle">РЕЙТИНГИ И НАГРАДЫ</h4>
    <div class="">
      <div v-for="{title, text, subtitle} in ratings" class="flex flex-col gap-4 border-b border-[#000] py-[25px] text-xs">
        <div class="uppercase font-bold">{{ title }}</div>
        <div>{{ subtitle }}</div>
        <div>{{ text }}</div>
      </div>
    </div>
    <h4 class="subtitle mt-3">ЧТО УМЕЕМ</h4>
    <div>
      <div v-for="{title, text} in weCan" class="flex flex-col gap-2 border rounded-xl border-[#000] p-[15px] text-xs mb-4">
        <div class="uppercase font-bold">{{ title }}</div>
        <div>{{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  isBig?: boolean
}>()
const ratings = [
  {
    title: "WADLINE",
    text: 'Победители международного конкурса сайтов и мобильных приложений, кейс «Онлайн-школы №1» / 2023',
    subtitle: "№1"
  },
  {
    title: "TAGLINE",
    text: 'Рейтинг лучших студий диджитал-дизайна России / 2023',
    subtitle: "топ - 37 "
  },
  {
    title: "TAGLINE",
    subtitle: "топ — 70",
    text: 'Рейтинг лучших веб-разработчиков / веб-интеграторов России / 2023'
  },
  {
    title: "TAGLINE",
    subtitle: "№78",
    text: 'Рейтинг лучших разработчиков мобильных приложений России / 2023'
  }
]

const weCan = [
  {
    title: 'РАЗРАБОТКА',
    text: 'Создание сайтов и веб-приложений любой степени сложности. Разработка полностью готовых решений с учетом специфики вашего бизнеса.'
  },
  {
    title: 'ДИЗАЙН',
    text: 'Комплексный дизайн и редизайн, в том числе аудит, анализ юзабилити, создание нового облика сайта в соответствии с актуальными тенденциями на интернет-рынке.'
  },
  {
    title: 'ПОДДЕРЖКА И РАЗВИТИЕ',
    text: 'Техническая помощь в работе с сайтом, мониторинг, обновление информации. Верстка, программирование, наполнение контентом, в том числе создание новых разделов и страниц товаров.'
  },
  {
    title: 'МОБИЛЬНАЯ РАЗРАБОТКА',
    text: 'Разработка мобильных приложений разной сложности. Наша команда использует современные кроссплатформенные языки React Native и Flutter. Это позволяет сократить бюджет, сроки и получить приложение, которое будет отлично работать как на iOS, так и на Android устройствах.'
  }
]
</script>

<style scoped>

</style>