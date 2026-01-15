<script setup lang="ts">
const { renderDate, renderType } = await useRenderInfo('isr')

const pros = [
  'Excellent performance (serves static files)',
  'Content updates automatically without a full rebuild',
  'Very low database load (only one query every N seconds)'
]

const cons = [
  'Content can be outdated for up to the configured interval',
  'First request after invalidation might trigger cold start latency (platform dependent)'
]

const links = [
  {
    label: 'Continue',
    to: '/island',
    trailingIcon: 'i-lucide-arrow-right'
  }
]
</script>

<template>
  <UContainer>
    <UPageSection
      title="Incremental Static Regeneration (ISR)"
      description="Regenerate static pages in the background after a configured time interval."
      icon="i-lucide-globe"
      :links="links"
    />

    <div class=" flex flex-col gap-12 mb-12">
      <RenderInfo
        v-if="renderType && renderDate"
        key="isr"
        :render-type="renderType"
        :render-date="renderDate"
      />

      <div class="max-w-none">
        <h3 class="text-lg font-bold">
          How it works
        </h3>
        <ul>
          <li>
            The page is generated on-demand or during build, then cached for a set period (e.g., 300
            seconds).
          </li>
          <li>All users see the same cached static version for that duration.</li>
          <li>
            After the time expires, the next request still gets the old (stale) version, but triggers a
            background regeneration.
          </li>
          <li>Once the new version is ready, it replaces the cache.</li>
          <li class="font-bold text-primary-500 mt-2">
            Nuxt Note: ISR and SWR are functionally very similar.
            ISR is the term used when targeting platform-specific static regeneration (like Vercel/Netlify),
            whereas SWR is the general caching strategy.
          </li>
        </ul>
      </div>
      <ProsCons
        :pros="pros"
        :cons="cons"
      />
    </div>
  </UContainer>
</template>
