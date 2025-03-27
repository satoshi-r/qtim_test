<template>
  <component
    :is="componentTag"
    :to="link"
    :target="isExternalLink ? 'blank' : ''"
    :class="{ btn: !clearedStyle, disabled: loading }"
  >
    <Loader v-if="loading" />
    <span v-if="!loading">
      <slot />
    </span>
  </component>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  to?: string | object | null
  href?: string | null
  loading?: boolean
  clearedStyle?: boolean
}>(), {
  loading: false,
  clearedStyle: false,
})

const link = computed(() => props.to || props.href)
const isExternalLink = computed(() => /^(https?:\/\/)/i.test(props?.href || ''))
const componentTag = computed(() => {
  if (link.value) return defineNuxtLink({})
  return 'button'
})
</script>
