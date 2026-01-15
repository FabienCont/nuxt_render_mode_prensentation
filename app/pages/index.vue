<template>
  <UPageHero
    title="Nuxt Render Mode Presentation"
    description="This website demonstrates the different rendering modes available in Nuxt 4: Client-Side Rendering (SPA), Server-Side Rendering (SSR), Static Site Generation (SSG / Prerendering), and Incremental Static Regeneration (ISR). Explore each mode to understand their pros, cons, and how they work under the hood."
    :links="[{
      label: 'Get started',
      to: '/spa',
      trailingIcon: 'i-lucide-arrow-right',
      size: 'xl'
    }, {
      label: 'Check the code',
      to: 'https://github.com/FabienCont/nuxt_render_mode_prensentation',
      target: '_blank',
      icon: 'i-simple-icons-github',
      size: 'xl',
      color: 'neutral',
      variant: 'subtle'
    }]"
  />
</template>
