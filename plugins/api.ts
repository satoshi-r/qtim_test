import { storeToRefs } from 'pinia'


export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const { token } = storeToRefs(useAuthStore()) || ''

  const $api = $fetch.create({
    baseURL: config.public.baseUrl,
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    onResponseError({ request, response }) {
      if (response?.status === 401) {
        deleteCookie('accessToken')
      }

      return Promise.reject(response)
    },
  })
  // Expose to useNuxtApp().$api
  return {
    provide: {
      api: $api
    }
  }
})
