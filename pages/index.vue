<template>
  <div class="mainBox" >
    <Test />

    <div class="min-h-[94vh]  flex flex-col">
      <Header/>

      <div class="title font2 uppercase mt-4 pb-4">
        Вписываемся <br/>
        в&nbsp;самые смелые проекты
      </div>

      <Partners class="mt-auto"/>
    </div>

    <Sidebar />
    <VideoSection/>

    <ContactUsModal />
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import VideoSection from "~/components/VideoSection.vue";
import Sidebar from "~/components/Sidebar.vue";
import Partners from "~/components/Partners/Partners.vue";
import ContactUsModal from "~/components/ContactUsModal/ContactUsModal.vue";

</script>

<style scoped lang="scss">
.mainBox {
  padding-right: 20px;
  margin-right: 550px;
  @media (max-width: 1550px) {
    margin-right: 450px;
  }
}

.title {
  font-size: 220px;
  user-select: none;
  line-height: 0.85;
}
</style>