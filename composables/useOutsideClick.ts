const useOutsideClick = (targetRef: Ref<HTMLElement>, callback: (event: Event) => void) => {
  const handler = (event: Event) => {
    if (targetRef.value && !targetRef.value.contains(event.target as Node)) {
      callback(event)
    }
  }

  onMounted(() => {
    document.addEventListener('click', handler)
  })

  onBeforeMount(() => {
    document.removeEventListener('click', handler)
  })
}

export default useOutsideClick
