export const useMap = () => {
  const controls = ref(['fullscreenControl'])
  const detailedControls = reactive({ zoomControl: { position: { right: 10, top: 50 } } })

  const markerIcon = reactive({
    layout: 'default#image',
    imageHref: '/icons/pin.svg',
    imageSize: [44, 44],
    imageOffset: [0, 0],
  })

  return {
    controls,
    detailedControls,
    markerIcon,
  }
}
