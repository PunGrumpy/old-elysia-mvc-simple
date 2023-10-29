import { z } from 'zod'

const envSchema = z.object({
  PORT: z.string().default('3000'),
  RUNTIME: z.enum(['bun', 'edge']).default('bun'),
  NODE_ENV: z.enum(['development', 'production']).default('development')
})

export const env = envSchema.parse(process.env)
