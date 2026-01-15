<script setup lang="ts">
const { renderDate, renderType } = await useRenderInfo('island')

const pros = [
  'Zero Javascript: The component logic is executed on the server, sending only HTML to the client.',
  'Reduced Bundle Size: Dependencies used in this component are not included in the client bundle.',
  'Security: Access databases or privates keys directly within the component (be careful with props!).',
  'Performance: Improves TTI (Time to Interactive) by reducing client-side work.',
  'Hydration free: No hydration cost for this part of the application.'
]

const cons = [
  'No Interactivity: Cannot use client-side event listeners (onClick) or lifecycle hooks (onMounted).',
  'Network Request: Fetching an island triggers a network request (unless prerendered usually).',
  'Props Serialization: Props must be serializable (no functions).',
  'Slot Limitations: Slots can only be passed if they are static or other islands (though this is improving).'
]

const links = [
  {
    label: 'Return Home',
    to: '/',
    trailingIcon: 'i-lucide-home'
  }
]
</script>

<template>
  <UContainer>
    <UPageSection
      title="Nuxt Islands (Server Components)"
      description="Components rendered entirely on the server, serving static HTML to the client. Zero JavaScript, no hydration cost. However, you cannot use Vue client-side interactivity directly. For example, the Refresh button below will not work."
      icon="i-lucide-palmtree"
      :links="links"
    />

    <div class=" flex flex-col gap-12 mb-12">
      <RenderInfo
        v-if="renderType && renderDate"
        key="island"
        :render-type="renderType"
        :render-date="renderDate"
      />
      <div>
        <h3 class="text-lg font-bold py-4">
          How it works
        </h3>
        <ul>
          <li>The <code>&lt;NuxtIsland&gt;</code> component (or <code>.server.vue</code> suffix) tells Nuxt to render this component in a separate server environment.</li>
          <li>Nuxt makes a fetch request to the server to get the HTML of that specific component.</li>
          <li>The server executes the Vue code and returns pure HTML (and CSS).</li>
          <li>The client "slots" this HTML into place without hydrating it.</li>
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
