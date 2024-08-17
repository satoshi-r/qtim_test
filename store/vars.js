import API from '@/api'
import zipObject from 'lodash/zipObject'

export const useVarsStore = defineStore('vars', {
  state: () => ({
    settings: null,
    menus: [],
    forms: [],
  }),
  actions: {
    async fetch() {
      const { $api } = useNuxtApp()
      const data = await $api(API.vars.settings())
      if (data) {
        const vars = data
        this.settings = vars.settings

        const menus = vars.menus || []
        this.menus = zipObject(
          vars.menus.map((o) => o.slug),
          menus,
        )

        const forms = vars.forms || []
        this.forms = zipObject(
          vars.forms.map((o) => o.id),
          forms,
        )
      }
    },
  },
})
