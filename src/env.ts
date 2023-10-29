import { z } from 'zod'

const envSchema = z.object({
  PRISMA_COCKROACH_DATABASE_URL: z.string().url(),
  PORT: z.string().default('3000')
})

export const env = envSchema.parse(process.env)
