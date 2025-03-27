<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <NuxtLayout :preloader="false">
    <div class="error-page">
      <div class="container">
        <div class="error-page__code">
          {{ props.error?.statusCode }}
        </div>
        <div class="error-page__message">
          {{ props.error?.statusMessage }}
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>
