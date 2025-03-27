export const useBodyScrollLock = () => {
  const lockBodyScroll = () => {
    if (window) {
      document.body.classList.add('scroll-lock')
    }
  }

  const unlockBodyScroll = () => {
    if (window) {
      document.body.classList.remove('scroll-lock')
    }
  }

  const watchBodyScroll = (target: Ref<boolean>) => {
    watchEffect(() => {
      target.value ? lockBodyScroll() : unlockBodyScroll()
    })
  }

  return {
    lockBodyScroll,
    unlockBodyScroll,
    watchBodyScroll,
  }
}
