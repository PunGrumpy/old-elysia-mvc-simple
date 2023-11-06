import { env } from './env'
import { app } from './app'
import { CreateElysia } from './utils/elysia'
import { contextRequest } from './utils/contextRequest'
import { logging } from './plugin/logging'
import { logger } from 'logixlysia'

const server = CreateElysia()
  .derive(ctx => contextRequest(ctx.request))
  .use(logger())
  .use(app)

server.listen({ port: env.PORT }, ({ hostname, port }) => {
  const url = env.NODE_ENV === 'production' ? 'https' : 'http'
  process.stdout.write('\x1Bc')

  const message = `🦊 Elysia is running at ${url}://${hostname}:${port}`
  const title = `Elysia v${env.ELYSIA_VERSION}`
  logging(message, title)
})
