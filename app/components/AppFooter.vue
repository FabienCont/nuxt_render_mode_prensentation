<template>
  <USeparator>
    <div class="w-6 h-6">
      <AppLogo />
    </div>
  </USeparator>

  <UFooter>
    <template #left>
      <p class="text-sm text-muted">
        Built with Nuxt 4.2.2 • © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton
        to="https://github.com/FabienCont/nuxt_render_mode_prensentation"
        target="_blank"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
