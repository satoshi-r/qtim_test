<template>
    <nuxt-link @click.prevent="action" >
        <slot>
            <span>
                {{ btn.title }}
            </span>
            <svg v-if="btn.btn_style === 'arrow'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.99998 3.81909L10.5904 4.40953L15.5904 9.40953L16.1808 9.99996L15.5904 10.5904L10.5904 15.5904L9.99998 16.1808L8.81911 15L9.40954 14.4095L12.9841 10.835H4.99998H4.16498V9.16496H4.99998H12.9841L9.40954 5.59039L8.81911 4.99996L9.99998 3.81909Z"
                    fill="black"
                />
            </svg>
        </slot>
    </nuxt-link>
</template>
<script setup>
const router = useRouter()
const emitter = useEmitter()

const props = defineProps({
  btn: {
    type: Object,
    required: true,
  },
})

const { btn } = props

const actionLink = () => {
    if (btn.link) router.push(btn.link)
}
const actionForm = () => {
    emitter.emit("openCommonModal", btn.form)
}
const actionImage = () => {
    const data = { image: btn.image }
    if (btn.image) emitter.emit("openImage", data)
}

const action = () => {
    if (btn.btn_type === 'link') actionLink()
    else if (btn.btn_type === 'image_popup') actionImage()
    else actionForm()
}
</script>