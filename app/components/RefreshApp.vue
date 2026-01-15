<script lang="ts" setup>
const refreshApp = () => {
  window.location.reload()
}
</script>

<template>
  <div>
    <UButton
      color="primary"
      variant="solid"
      size="lg"
      icon="i-lucide-refresh-cw"
      aria-label="Refresh Application"
      @click="refreshApp"
    >
      Refresh
    </UButton>
  </div>
</template>
