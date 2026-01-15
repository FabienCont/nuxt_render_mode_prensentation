import { z } from 'zod'

const counterShema = z.object({
  key: z.string().min(1, 'Key is required'),
  increment: z.enum(['true', 'false']).optional().transform(value => value === 'true')
})
const stats: Record<string, number> = {}

export default defineEventHandler(async (event) => {
  const { key, increment } = await getValidatedQuery(event, counterShema.parse)
  const shouldIncrement = increment === true

  if (!key) return 0

  if (!stats[key]) stats[key] = 0

  if (shouldIncrement) {
    stats[key]++
  }

  return stats[key]
})
