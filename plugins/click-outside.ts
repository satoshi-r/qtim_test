export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    beforeMount(el, binding) {
      el.clickOutsideHandler = function (event: Event) {
        if (!(el == event.target || el.contains(event.target))) {
          binding.value()
        }
      }

      document.addEventListener('click', el.clickOutsideHandler)
    },
    unmounted(el) {
      document.removeEventListener('click', el.clickOutsideHandler)
    },
  })
})
