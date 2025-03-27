import SimpleBar from 'simplebar'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('simplebar', {
    mounted(el) {
      const simplebar = new SimpleBar(el)
      nextTick(() => {
        simplebar.recalculate()
      })
    },
  })
})
