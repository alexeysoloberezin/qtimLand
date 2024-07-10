<template>
  <div class="mainBox" >
    <div class="min-h-[94vh]  flex flex-col">
      <Header/>

      <div class="title font2 uppercase mt-4 pb-4">
        Вписываемся <br/>
        в&nbsp;самые смелые проекты
      </div>

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
            <Button :size="'lg'" class="uppercase font-medium">Оставить заявку</Button>
          </div>
        </div>
      </div>
    </div>

    <div
        class="overlay fixed w-screen h-screen bg-[#000] z-15 opacity-[0.4] z-[14] top-0 left-0 cursor-pointer"
        @click="closeOverlay"
        :class="{'hidden': !isActiveSidebar}"
    ></div>
    <div class="min-h-[95vh] bg-primary rounded-large fixed top-[25px] right-[25px] sidebar  text-background pb-[20px]"
         :style="{width: width + 'px', transition: isActiveSidebar ? '0s': '.4s'}"
         ref="sidebar"
    >
      <div class="flex items-center gap-3 py-[10px] px-[30px] sidebar-header">
        <div class="cursor-pointer transition duration-500"
             :style="{transform: isActiveSidebar ? 'rotate(180deg)' : ''}"
             @click="toggleSidebar"
        >
          <SideBarArrow/>
        </div>
        <div class="flex items-center gap-5 font-medium ml-auto">
          <div v-for="(el, key) in tabs" :key="key"
               @click="activeTab = key" class="cursor-pointer underline-offset-2"
               :class="{'underline': activeTab === key}"
          >{{ el.name }}
          </div>
        </div>
        <Button :color="'reverse'" :size="'md'" class="uppercase">
          Оставить заявку
        </Button>
      </div>
      <div class="drag " ref="drag">
        <span></span>
        <span></span>
      </div>

      <div class="tabBox scroll relative">
        <component :is="tabs[activeTab].component" :isBig="width > baseSidebarWidth + 250"/>
      </div>
    </div>

    <VideoSection/>

  </div>

</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import SideBarArrow from "~/components/icons/SideBarArrow.vue";
import Button from "~/components/Button.vue";
import AboutUs from '~/components/SidebarTabs/AboutUs.vue'
import Vacan from '~/components/SidebarTabs/Vacanc.vue'
import Contacts from '~/components/SidebarTabs/Contacts.vue'
import Peco from "~/components/icons/partners/peco.vue";
import Sber from "~/components/icons/partners/sber.vue";
import VideoSection from "~/components/VideoSection.vue";
import {useWindowSize} from "@vueuse/core";

const baseSidebarWidthSizes = {
  'sm': 450,
  'ds': 550
}

const baseSidebarWidth = ref(550)
const {width: windowWidth, height} = useWindowSize()
const width = ref(baseSidebarWidth.value)
const drag = ref(null)
const sidebar = ref(null)
const dragData = ref({startX: 0, startWidth: 0});

watch(() => {
  if(windowWidth.value > 1550){
    baseSidebarWidth.value = baseSidebarWidthSizes['ds']
    width.value = baseSidebarWidthSizes['ds']
  }
  baseSidebarWidth.value = baseSidebarWidthSizes['sm']
  width.value = baseSidebarWidthSizes['sm']
})



const isActiveSidebar = computed(() => width.value > baseSidebarWidth.value)

const activeTab = ref('about')

const tabs = {
  'about': {
    component: AboutUs,
    name: 'о нас'
  },
  'vacan': {
    component: Vacan,
    name: 'вакансии'
  },
  'contacts': {
    component: Contacts,
    name: 'контакты'
  }
}
const handleDrag = (event: MouseEvent) => {
  // console.log('handleDrag')
  const offsetX = event.clientX - dragData.value.startX;
  // console.log('offsetX', event, dragData.value)
  width.value = Math.max(baseSidebarWidth.value, dragData.value.startWidth - offsetX);
};

const startDrag = (event: MouseEvent) => {
  dragData.value.startX = event.clientX;
  dragData.value.startWidth = sidebar.value.getBoundingClientRect().width;
  document.addEventListener('mousemove', handleDrag);
  document.addEventListener('mouseup', stopDrag);
};

const stopDrag = () => {
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('mouseup', stopDrag);
};

const closeOverlay = () => {
  if (isActiveSidebar.value) {
    width.value = baseSidebarWidth.value
  }
}

const toggleSidebar = () => {
  width.value = isActiveSidebar.value ? baseSidebarWidth.value : (window.innerWidth * 70) / 100
}

onMounted(() => {
  const dragElement = drag.value;
  dragElement.addEventListener('mousedown', startDrag);
});
</script>

<style scoped lang="scss">
.mainBox {
  padding-right: 20px;
  margin-right: 550px;
  @media (max-width: 1550px) {
    margin-right: 450px;
  }
}

.sidebar {
  max-width: 70vw;
  z-index: 20;
  min-width: 550px;
  @media (max-width: 1550px) {
    min-width: 450px;
  }
}

.drag {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 24;
  width: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: ew-resize;

  span {
    width: 2px;
    height: 60px;
    background: var(--background-color);
    opacity: 0.2;
  }
}

.title {
  font-size: 220px;
  user-select: none;
  line-height: 0.85;
}

.sidebar-header {
  border-bottom: 1px solid var(--background-color);
}

.tabBox {
  padding: 50px 32px 40px;
  overflow-y: auto;
  max-height: calc(100vh - 130px);
}


</style>