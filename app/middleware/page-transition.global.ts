import { NAV_LINKS } from '../composables/useNavigation'

export default defineNuxtRouteMiddleware((to, from) => {
  const getRouteIndex = (path: string) => {
    return NAV_LINKS.findIndex((item) => {
      if (item.to === '/') return path === '/'
      return path.startsWith(item.to)
    })
  }

  const toIndex = getRouteIndex(to.path)
  const fromIndex = getRouteIndex(from.path)

  if (toIndex === -1 || fromIndex === -1) {
    to.meta.pageTransition = false
    from.meta.pageTransition = false
    return
  }

  if (toIndex > fromIndex) {
    to.meta.pageTransition = { name: 'slide-left', mode: 'out-in' }
    from.meta.pageTransition = { name: 'slide-left', mode: 'out-in' }
  } else {
    to.meta.pageTransition = { name: 'slide-right', mode: 'out-in' }
    from.meta.pageTransition = { name: 'slide-right', mode: 'out-in' }
  }
})
