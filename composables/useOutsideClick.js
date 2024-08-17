const useOutsideClick = (targetRef, callback) => {
  const handler = (event) => {
    if (targetRef.value && !targetRef.value.contains(event.target)) {
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
