import { z } from 'zod'

const envSchema = z.object({
  ELYSIA_VERSION: z.string().default('0.0.0'),
  PORT: z.string().default('3000'),
  RUNTIME: z.enum(['bun', 'edge']).default('bun'),
  NODE_ENV: z.enum(['development', 'production']).default('development')
})

export const env = envSchema.parse(process.env)
