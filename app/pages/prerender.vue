<script setup lang="ts">
const { renderDate, renderType } = await useRenderInfo('prerender')

definePageMeta({
  key: 'prerender'
})

const pros = [
  'Fastest possible performance',
  'Excellent SEO',
  'Cheap hosting (CDN)',
  'High security (no server to hack)'
]

const cons = [
  'Long build times for large sites',
  'Content is stale until next build',
  'Not suitable for highly dynamic per-user content'
]

const links = [
  {
    label: 'Continue',
    to: '/swr',
    trailingIcon: 'i-lucide-arrow-right'
  }
]
</script>

<template>
  <UContainer>
    <UPageSection
      title="Static Site Generation (SSG / Prerendering)"
      description="Pages are generated at build time."
      icon="i-lucide-file"
      :links="links"
    />

    <div class=" flex flex-col gap-12 mb-12">
      <RenderInfo
        v-if="renderType && renderDate"
        key="prerender"
        :render-type="renderType"
        :render-date="renderDate"
      />
      <div>
        <h3 class="text-lg font-bold py-4">
          How it works
        </h3>
        <ul>
          <li>Nuxt generates HTML files for every route during `nuxt generate`.</li>
          <li>
            The "Rendered At" time above will show the time you ran the build, not the time you visited
            the page.
          </li>
          <li>When you visit, the server just serves the static HTML file.</li>
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
