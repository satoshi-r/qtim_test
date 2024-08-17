<template>
  <transition name="fade">
    <div v-if="commonStore.isShowPreloader" class="preloader">
    </div>
  </transition>
</template>

<script setup>
const commonStore = useCommonStore();
</script>
