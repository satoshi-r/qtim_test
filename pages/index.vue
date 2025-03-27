<template>
  <div class="home-page">
    <section class="articles">
      <div class="container articles__inner">
        <h1 class="title articles__title">
          Articles
        </h1>

        <div class="articles__list">
          <KeepAlive>
            <ArticleCard v-for="article in visibleArticles" :key="article.id" :content="article" />
          </KeepAlive>
        </div>

        <Pagination v-if="articles?.length" v-model:currentPage="currentPage" :totalItems="articles.length"
          :itemsPerPage="PAGE_SIZE" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import API from '@/api'
import type { Article } from '@/types/article'

const currentPage = ref<number>(1)
const { $api } = useNuxtApp()
const { data: articles } = await useAsyncData<Article[]>('articles', () => $api(API.posts.getPosts()))
const { updateQuery } = useQueries()

const visibleArticles = computed<Article[]>(() => {
  if (!articles.value) return []

  const start = (currentPage.value - 1) * PAGE_SIZE
  const end = start + PAGE_SIZE
  return articles.value.slice(start, end)
})

watch(currentPage, () => {
  updateQuery({ page: String(currentPage.value) })
})

onMounted(() => {
  const { query } = useRoute()
  if (query.page) {
    currentPage.value = Number(query.page)
  }
})
</script>
