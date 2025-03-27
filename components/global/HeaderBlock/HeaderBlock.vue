<template>
    <header class="header">
        <div class="container header__inner">
            <nuxt-link to="/" class="header__logo">
                <img src="/images/logo.svg" alt="logo" class="header__logo-img">
            </nuxt-link>

            <div class="header__right">
                <div class="header__nav">
                    <nuxt-link to="/" class="header__nav-item">
                        Works
                    </nuxt-link>
                    <nuxt-link to="/" class="header__nav-item">
                        About
                    </nuxt-link>
                </div>
                <button class="header__lang">
                    <img src="/images/lang-us.png" alt="lang" class="header__lang-icon">
                </button>

                <ButtonPrimary class="header__btn">Let’s work</ButtonPrimary>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>