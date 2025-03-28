<template>
    <header class="header">
        <div class="container header__inner">
            <nuxt-link to="/" class="header__logo">
                <img src="/images/logo.svg" alt="logo" class="header__logo-img">
            </nuxt-link>

            <div class="header__right">
                <div class="header__nav">
                    <nuxt-link v-for="link in links" :to="link.link" class="header__nav-item">
                        {{ link.title }}
                    </nuxt-link>

                </div>
                <button class="header__lang">
                    <img src="/images/lang-us.png" alt="lang" class="header__lang-icon">
                </button>

                <ButtonPrimary class="header__btn">Let’s work</ButtonPrimary>

                <div @click="toggleMenu" class="header__menu-btn" :class="{ opened: isShowMobileMenu }">
                    <img src="/icons/menu-white.svg" alt="" class="open">
                    <img src="/icons/close-white.svg" alt="" class="close">
                </div>
            </div>
        </div>

        <transition name="fade">
            <div class="header__menu" v-show="isShowMobileMenu">
                <div class="header__menu-nav">
                    <nuxt-link v-for="(link, idx) in links" :to="link.link" :key="idx" class="header__menu-link">
                        {{ link.title }}
                    </nuxt-link>
                </div>
            </div>
        </transition>
    </header>
</template>

<script setup lang="ts">
const isShowMobileMenu = ref<boolean>(false)
const links = ref([
    { title: "Works", link: "/" },
    { title: "About", link: "/" },
])

const toggleMenu = () => {
    isShowMobileMenu.value = !isShowMobileMenu.value
}
</script>