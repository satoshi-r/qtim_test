<template>
    <div class="article-page">
        <section class="article">
            <div class="container">
                <h1 class="title article__title">{{ article?.title || '' }}</h1>
                <div v-if="article?.image" class="article__img">
                    <img :src="article.image" alt="">
                </div>
                <div class="article__caption">About</div>
                <div v-if="article?.description" v-html="article.description" class="article__description">
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
import API from '@/api'
import type { Article } from '@/types/article'

const route = useRoute()
const { slug } = route.params
const { $api } = useNuxtApp()

const { data: article } = await useAsyncData<Article>('article', () => $api(API.posts.getPostById(slug)))
</script>