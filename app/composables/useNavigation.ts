export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'SPA', to: '/spa' },
  { label: 'SSR', to: '/ssr' },
  { label: 'SSG/Prerender', to: '/prerender' },
  { label: 'SWR', to: '/swr' },
  { label: 'ISR', to: '/isr' },
  { label: 'Island', to: '/island' }
]

export const useNavigation = () => {
  const route = useRoute()

  const items = computed(() => NAV_LINKS.filter(item => item.to !== '/').map(item => ({
    ...item,
    active: route.path.startsWith(item.to)
  })))

  return {
    items
  }
}
