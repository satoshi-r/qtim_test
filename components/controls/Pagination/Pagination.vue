<template>
    <div class="pagination">
        <button v-if="currentPage !== 1" class="pagination__prev" @click="handlePrevPage">
            <img src="/icons/arrow-left-black.svg" alt="Previous">
        </button>

        <button v-for="page in displayedPages" :key="page" class="pagination__item"
            :class="{ 'active': page === currentPage }" @click="handlePageClick(page)">
            <div class="pagination__item-value">{{ page }}</div>
        </button>

        <button v-if="currentPage !== totalPages" class="pagination__next" @click="handleNextPage">
            <img src="/icons/arrow-right-black.svg" alt="Next">
        </button>
    </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
    totalItems: number
    itemsPerPage: number
    currentPage: number
    maxVisiblePages?: number
}>(), {
    maxVisiblePages: 5,
})

const emit = defineEmits<{
    'update:currentPage': [page: number]
}>()

const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))

const displayedPages = computed(() => {
    const pages: number[] = []

    let start = Math.max(1, props.currentPage - 2)
    let end = Math.min(totalPages.value, start + props.maxVisiblePages - 1)

    if (end - start + 1 < props.maxVisiblePages) {
        start = Math.max(1, end - props.maxVisiblePages + 1)
    }

    for (let i = start; i <= end; i++) {
        pages.push(i)
    }

    return pages
})

const handlePageClick = (page: number) => {
    emit('update:currentPage', page)
}

const handlePrevPage = () => {
    if (props.currentPage > 1) {
        emit('update:currentPage', props.currentPage - 1)
    }
}

const handleNextPage = () => {
    if (props.currentPage < totalPages.value) {
        emit('update:currentPage', props.currentPage + 1)
    }
}
</script>
