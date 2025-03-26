const protocol = 'https://'
const hostAPI = `${protocol}6082e3545dbd2c001757abf5.mockapi.io`
const mainHost = '6082e3545dbd2c001757abf5.mockapi.io'

export default {
    baseURL: `${hostAPI}/qtim-test-work/`,
    mediaURL: `${hostAPI}/media`,
    locales: ['ru', 'en'],
    protocol: protocol,
    mainHost: mainHost,
    hostURL: `${protocol}${mainHost}`,
    dsn: '',
}
