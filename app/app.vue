<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Nuxt Render Mode présentation'
const description = 'A Nuxt 4 template to compare the different rendering modes available in Nuxt.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/starter-light.png',
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <UApp>
    <AppHeader />

    <UMain class="min-h-[calc(100vh-var(--ui-header-height)-6rem)]">
      <NuxtPage />
    </UMain>

    <AppFooter />
  </UApp>
</template>

<style>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.25s;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translate(100px, 0);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(-100px, 0);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translate(-100px, 0);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate(100px, 0);
}
</style>
