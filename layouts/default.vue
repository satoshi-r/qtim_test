<template>
  <div class="page-wrapper">
    <Preloader v-if="preloader" />
    <HeaderBlock />
    <div class="page-inner">
      <slot />
    </div>
    <FooterBlock />
  </div>
</template>

<script setup>
defineProps({
  preloader: {
    type: Boolean,
    required: false,
    default: true
  }
})

const commonStore = useCommonStore()
const nuxtApp = useNuxtApp()

nuxtApp.hook('page:start', () => {
  commonStore.isShowPreloader = true
})

nuxtApp.hook('page:finish', () => {
  commonStore.isShowPreloader = false
})
</script>
