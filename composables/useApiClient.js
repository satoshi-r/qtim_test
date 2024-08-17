import { storeToRefs } from 'pinia'
import { useAuthStore } from '~/store/auth'

export const useApiClient = async (url, options, clientToken) => {
  const config = useRuntimeConfig()
  const { token } = storeToRefs(useAuthStore()) || clientToken || ''

  return await useFetch(url, {
    baseURL: config.public.baseUrl,
    ...options,
    credentials: 'include',
    headers: {
      Authorization: `Bearer ${clientToken || token.value}`,
    },
    onResponseError({ request, response }) {
      if (response?.status === 401) {
        deleteCookie('accessToken')
      }

      return Promise.reject(response)
    },
  })
}
