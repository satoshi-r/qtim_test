export const useLazyImage = () => {
  const observer = useState('imageObserver', () => {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target instanceof HTMLImageElement) {
              const element = entry.target
              element.src = element.dataset.src || ''
              observer.value.unobserve(element)
            }
          }
        })
      },
      {
        root: null,
      },
    )
  })

  return observer
}
