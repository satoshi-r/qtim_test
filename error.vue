<script setup lang="ts">
// import API from '@/api'
// import type { NuxtError } from '#app'

// const { $api } = useNuxtApp()
// const { data: page } = await useAsyncData( 'product-page', () => $api(API.pages.error()))

// const { addSeoFields } = useUtils()
// useHead(addSeoFields({ page: page.value }));

// const props = defineProps({
//   error: Object as () => NuxtError,
// })

// const statusCode = computed(() => props.error?.statusCode.toString().split(''))
</script>

<template>
  <NuxtLayout :preloader="false">
    <div class="error-page">
      404
    </div>
  </NuxtLayout>
</template>
