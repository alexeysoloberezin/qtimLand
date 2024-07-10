<template>
  <div ref="videoContainer" class="video-container">
    <video ref="video" class="rounded-md aspect-[16/9] object-cover"  muted>
      <source :src="url" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>


<script setup lang="ts">
const props = defineProps<{
  url: string
}>()

const video = ref<HTMLVideoElement | null>(null);
const videoContainer = ref<HTMLDivElement | null>(null);

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('play')
      video.value?.play();
    } else {
      video.value?.pause();
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Используем viewport как контейнер для отслеживания
    threshold: 0.5 // Процент видимости видео, при котором начнется воспроизведение
  });

  if (videoContainer.value) {
    observer.observe(videoContainer.value);
  }
});

onBeforeUnmount(() => {
  const observer = new IntersectionObserver(handleIntersection);
  if (videoContainer.value) {
    observer.unobserve(videoContainer.value);
  }
});
</script>


<style scoped>

</style>