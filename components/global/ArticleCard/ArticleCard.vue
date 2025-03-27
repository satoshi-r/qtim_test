<template>
    <nuxt-link :to="`/article/${content.id}`" class="article-card">
        <div class="article-card__img">
            <img :src="content.image" :alt="content.title" loading="lazy" :key="content.id">
        </div>
        <div v-if="content?.preview" class="article-card__preview">
            {{ content.preview }}
        </div>
        <div class="article-card__btn">
            Read more
        </div>
    </nuxt-link>
</template>
<script setup lang="ts">
import type { Article } from '@/types/article'

defineProps<{
    content: Article
}>()
</script>