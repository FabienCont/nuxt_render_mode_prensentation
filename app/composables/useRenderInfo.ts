export const useRenderInfo = async (key: string) => {
  const renderDate = useState('render-date-' + key, () => new Date())

  const renderType = useState('render-type-' + key, () => {
    if (import.meta.server) return 'Server-Side'
    return 'Client-Side'
  })

  const renderCounter = useState<number>('render-counter-' + key, () => 0)
  if (import.meta.server) {
    renderType.value = 'Server-Side'
  }

  const fetchCounter = async () => {
    if (!key || !import.meta.server) return

    const { data: counterData } = await useFetch<number>('/api/render-stats', {
      key: 'render-server-counter-' + key,
      params: {
        key,
        increment: String(import.meta.server)
      }
    })

    if (counterData.value !== undefined) {
      renderCounter.value = counterData.value
    }
  }

  fetchCounter()

  return {
    renderDate,
    renderType,
    renderCounter
  }
}
