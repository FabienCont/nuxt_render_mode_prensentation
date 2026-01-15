<script setup lang="ts">
const props = defineProps<{
  renderType: string
  renderDate: Date
  renderCounter?: number
}>()

const date = ref(new Date())
const milliseconds = computed(() => date.value.getMilliseconds())

const serverMilliseconds = computed(() => new Date(props.renderDate).getMilliseconds())
</script>

<template>
  <UCard>
    <template #header>
      <div class="flex items-center gap-4 cursor-pointer">
        <h3 class="text-lg font-bold">
          Render Context
        </h3>
        <RefreshApp />
      </div>
    </template>

    <div class="space-y-4">
      <div
        v-if="renderType === 'Server-Side'"
        class="flex items-center gap-2"
      >
        <UIcon
          name="i-lucide-clock"
          class="w-5 h-5 text-primary"
        />
        <span class="font-bold">Time in server rendered HTML:</span>
        <NuxtTime
          class="font-mono"
          :datetime="renderDate"
          year="numeric"
          month="long"
          day="numeric"
          hour="2-digit"
          minute="2-digit"
          second="2-digit"
          time-zone-name="short"
        />
        <span>| miliseconds : {{ serverMilliseconds }} </span>
      </div>

      <div class="flex items-center gap-2">
        <UIcon
          name="i-lucide-clock"
          class="w-5 h-5 text-primary"
        />
        <span class="font-bold">Time render after hydration:</span>
        <ClientOnly>
          <template #fallback>
            <USkeleton class="h-5 w-48" />
          </template>
          <NuxtTime
            class="font-mono"
            :datetime="date"
            year="numeric"
            month="long"
            day="numeric"
            hour="2-digit"
            minute="2-digit"
            second="2-digit"
            time-zone-name="short"
          />
          <span>| miliseconds : {{ milliseconds }} </span>
        </ClientOnly>
      </div>

      <div class="flex items-center gap-2">
        <UIcon
          name="i-lucide-monitor"
          class="w-5 h-5 text-primary"
        />
        <span class="font-bold">Initial Render:</span>
        <UBadge :color="renderType === 'Server-Side' ? 'primary' : 'secondary'">
          {{ renderType === 'Server-Side'
            ? 'Server-Side' : 'Client-Side' }}
        </UBadge>
      </div>

      <div
        v-if="renderCounter !== undefined"
        class="flex items-center gap-2"
      >
        <UIcon
          name="i-lucide-refresh-cw"
          class="w-5 h-5 text-primary"
        />
        <span class="font-bold">Server Render Count:</span>
        <span>{{ renderCounter }}</span>
      </div>

      <div class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        <p>This date is captured when the page is initially rendered (Server, Build-time, or Client).</p>
        <p>To get accurate "Rendered At" times refresh the page.</p>
      </div>
    </div>
  </UCard>
</template>
