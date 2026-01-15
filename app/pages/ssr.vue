<script setup lang="ts">
const { renderDate, renderType, renderCounter } = await useRenderInfo('ssr')

const pros = [
  'Great SEO',
  'Fast First Contentful Paint (FCP)',
  'Dynamic content is always up-to-date'
]

const cons = [
  'Higher server load',
  'Slower Time to First Byte (TTFB) compared to static',
  'Requires a running Node.js server (or similar)'
]

const links = [
  {
    label: 'Continue',
    to: '/prerender',
    trailingIcon: 'i-lucide-arrow-right'
  }
]
</script>

<template>
  <UContainer>
    <UPageSection
      title="Server-Side Rendering (SSR)"
      description="The page is generated on the server for every single request."
      icon="i-lucide-server"
      :links="links"
    />

    <div class=" flex flex-col gap-12 mb-12">
      <RenderInfo
        v-if="renderType && renderDate"
        key="ssr"
        :render-type="renderType"
        :render-date="renderDate"
        :render-counter="renderCounter"
      />

      <div>
        <h3 class="text-lg font-bold py-4">
          How it works
        </h3>
        <ul>
          <li>When you request this page, the Nuxt server executes the Vue code.</li>
          <li>It fetches any data needed.</li>
          <li>It generates the full HTML string.</li>
          <li>Your browser receives the HTML and displays it immediately.</li>
          <li>Then, the JavaScript loads and "hydrates" the page to make it interactive.</li>
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
