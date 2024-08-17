const protocol = 'https://'
const hostAPI = `${protocol}api.website.ru`
const mainHost = 'website.ru'

export default {
  baseURL: `${hostAPI}/api/`,
  mediaURL: `${hostAPI}/media`,
  locales: ['ru', 'en'],
  protocol: protocol,
  mainHost: mainHost,
  hostURL: `${protocol}${mainHost}`,
  dsn: '',
}
