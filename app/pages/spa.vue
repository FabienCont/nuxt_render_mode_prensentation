<script setup lang="ts">
const { renderDate, renderType } = await useRenderInfo('spa')

const pros = [
  'Cheap hosting (static files)',
  'Fast navigation after initial load',
  'Reduced server load'
]

const cons = [
  'Poor SEO (crawlers see empty page initially)',
  'Slower initial load (user sees blank screen until JS loads)'
]

const links = [
  {
    label: 'Continue',
    to: '/ssr',
    trailingIcon: 'i-lucide-arrow-right'
  }
]
</script>

<template>
  <UContainer>
    <UPageSection
      title="Client-Side Rendering (SPA)"
      description="The application renders entirely in the browser."
      icon="i-lucide-monitor"
      :links="links"
    />
    <div class="flex flex-col gap-12 mb-12">
      <RenderInfo
        v-if="renderType && renderDate"
        key="spa"
        :render-type="renderType"
        :render-date="renderDate"
      />

      <div>
        <h3 class="text-lg font-bold py-4">
          How it works
        </h3>
        <ul>
          <li>The server sends an empty HTML shell with script tags.</li>
          <li>The browser downloads the JavaScript bundle.</li>
          <li>Vue executes in the browser and generates the DOM.</li>
          <li>"Initial Render" in the card above will likely say "Client-Side".</li>
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
