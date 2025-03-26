<template>
  <label class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :checked="value"
      @input="emit('input', id)"
    />
    <div class="checkbox__icon">
      <!-- <img src="/icons/checkbox-white.svg" alt="" /> -->
    </div>
    <div class="checkbox__title">{{ title }}</div>
  </label>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: false,
    default: ''
  },
  id: {
    type: Number,
    required: false,
    default: 0
  },
  value: {
    type: Boolean,
    required: false,
    default: false
  }
})
const emit = defineEmits({ input: Number })

</script>
