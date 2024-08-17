<template>
  <div v-click-outside="close" class="dropdown" :class="{ opened: isShown }">
    <div v-if="title" class="dropdown__title">{{ title }}</div>
    <div @click="toggle" class="dropdown__btn">
      <div class="dropdown__placeholder">{{ placeholder }}</div>
      <div class="dropdown__arrow">
        <img src="/icons/arrow-down-black-1.svg" alt="" />
      </div>
    </div>
    <transition name="fade">
      <div v-show="isShown" class="dropdown__content">
        <div
          v-for="item in items"
          :key="item.id"
          @click="select(item)"
          class="dropdown__item"
        >
          {{ item.text }}
        </div>
      </div>
    </transition>
  </div>
</template>
<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: false,
    default: '',
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
})

const emits = defineEmits(['select'])

const isShown = ref(false)
const toggle = () => {
  isShown.value = !isShown.value
}

const close = () => {
  isShown.value = false
}

const select = (item) => {
  emits('select', item)
  close()
}
</script>
