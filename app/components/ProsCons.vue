<script setup lang="ts">
const { pros, cons } = defineProps<{
  pros: string[]
  cons: string[]
}>()
</script>

<template>
  <h3 class="text-lg font-bold py-4">
    Pros & Cons
  </h3>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <UCard>
      <template #header>
        <span class="text-green-500 font-bold">Pros</span>
      </template>
      <ul class="list-disc pl-4">
        <li
          v-for="pro in pros"
          :key="pro"
        >
          {{ pro }}
        </li>
      </ul>
    </UCard>
    <UCard>
      <template #header>
        <span class="text-red-500 font-bold">Cons</span>
      </template>
      <ul class="list-disc pl-4">
        <li
          v-for="con in cons"
          :key="con"
        >
          {{ con }}
        </li>
      </ul>
    </UCard>
  </div>
</template>
