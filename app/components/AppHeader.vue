<script setup lang="ts">
const { items } = useNavigation()
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <div class="flex items-center gap-2">
          <AppLogo class="w-auto h-6 shrink-0" />
          <span class="text-xl font-bold hidden sm:inline-block">Nuxt <span class="text-primary">Render Mode</span></span>
        </div>

      </NuxtLink>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip
        text="Open on GitHub"
        :kbds="['meta', 'G']"
      >
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/FabienCont/nuxt_render_mode_prensentation"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>
  </UHeader>
</template>
