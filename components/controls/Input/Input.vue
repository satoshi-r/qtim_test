<template>
  <label class="input">
    <div class="input__title">{{ title }}</div>
    <input
      v-if="type !== 'textarea'"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :autocomplete="type === 'password' ? 'new-password' : ''"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <textarea
      v-else
      :value="modelValue"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </label>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: '',
    required: false,
  },
  placeholder: {
    type: String,
    default: '',
    required: false,
  },
  type: {
    type: String,
    default: 'text',
    required: false,
  },
  modelValue: {
    type: [String, Number],
    requried: false,
    default: '',
  },
})
defineEmits(['update:modelValue'])
</script>
