import type { CommonStore } from "~/types/common";

export const useCommonStore = defineStore<string, CommonStore>('common', {
  state: () => ({
    isShowPreloader: true,
  }),
})
