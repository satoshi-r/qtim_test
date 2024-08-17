export const useUtils = () => {

  const dateFormatter = (dateRaw, monthFull) => {
    const date = new Date(dateRaw)
    const options = {
      day: 'numeric',
      month: monthFull ? 'long' : 'numeric',
      year: 'numeric'
    }
    return String(date.toLocaleDateString('ru-RU', options))
  }

  const addSeoFields = ({ head={}, page={} }) => {
    head.title = page?.meta && page?.meta.seo_title ? page?.meta.seo_title : page.title
    if (!Object.hasOwn(head, 'meta')) head.meta = []
    head.meta.push({
      hid: 'description', name: 'description', content: page?.meta?.seo_description
    })
    return head
  }

  return {
    dateFormatter,
    addSeoFields,
  }

}
