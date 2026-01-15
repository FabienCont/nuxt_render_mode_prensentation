<script setup lang="ts">
const { renderDate, renderType, renderCounter } = await useRenderInfo('swr')

const pros = [
  'Excellent performance (serves cached content)',
  'Content updates automatically without a full rebuild',
  'Very low database load (only one query every N seconds)'
]

const cons = [
  'Content can be outdated for up to the configured interval',
  'Requires a server or edge worker (not purely static hosting)'
]
const links = [
  {
    label: 'Continue',
    to: '/isr',
    trailingIcon: 'i-lucide-arrow-right'
  }
]
</script>

<template>
  <UContainer>
    <UPageSection
      title="Stale-While-Revalidate (SWR)"
      description="Serve stale content while revalidating in the background."
      icon="i-lucide-refresh-cw"
      :links="links"
    />

    <div class=" flex flex-col gap-12 mb-12">
      <RenderInfo
        v-if="renderType && renderDate"
        key="swr"
        :render-type="renderType"
        :render-date="renderDate"
        :render-counter="renderCounter"
      />

      <div>
        <h3 class="text-lg font-bold py-4">
          How it works
        </h3>
        <ul>
          <li>page is generated on-demand, then cached for a set period (e.g., 300 seconds).</li>
          <li>All users see the same cached version for that duration.</li>
          <li>
            After the time expires, the next request still gets the old (stale) version, but triggers a
            background regeneration.
          </li>
          <li>Once the new version is ready, it replaces the cache.</li>
          <li class="font-bold text-primary-500 mt-2">
            Nuxt Note: SWR and ISR are functionally very similar.
            SWR uses standard HTTP caching strategies, while ISR often targets platform-specific static
            regeneration (like Vercel/Netlify) this page a few times. You might see the timestamp stay the
            same, then update after
            a delay.
          </li>
        </ul>
      </div>
      <div>
        <ProsCons
          :pros="pros"
          :cons="cons"
        />
      </div>
    </div>
  </UContainer>
</template>
