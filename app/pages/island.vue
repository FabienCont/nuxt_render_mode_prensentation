<script setup lang="ts">
import IslandRenderExplanation from '~/components/islands/IslandRenderExplanation.vue'

definePageMeta({
  key: 'island'
})

const error = {
  statusCode: 404,
  statusMessage: 'Island Not Found',
  message: 'If you see this error, the island component could not be loaded. If the application is deployed as a static site, make sure the island component is prerendered.'
}
</script>

<template>
  <UContainer>
    <NuxtIsland name="IslandRenderExplanation">
      <template #fallback>
        <UError :error="error" />
      </template>
      <IslandRenderExplanation />
    </NuxtIsland>
  </UContainer>
</template>
