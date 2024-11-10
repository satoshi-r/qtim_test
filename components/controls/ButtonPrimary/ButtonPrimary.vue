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

<script setup>
const props = defineProps({
  to: {
    type: [String, Object],
    required: false,
    default: null,
  },
  href: {
    type: String,
    required: false,
    default: null,
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  clearedStyle: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const link = computed(() => props.to || props.href)
const isExternalLink = computed(() => /^(https?:\/\/)/i.test(props.href))
const componentTag = computed(() => {
  if (link.value) return defineNuxtLink({})
  return 'button'
})
</script>
