import { env } from './env'
import { APIRoute } from './api'
import { CreateElysia } from './utils/elysia'
import { contextRequest } from './utils/contextRequest'

const server = CreateElysia()
  .derive(ctx => contextRequest(ctx.request))
  .get('/', ({ set }) => (set.redirect = '/swagger'))
  .use(APIRoute)

server.listen({ port: env.PORT }, ({ hostname, port }) => {
  const url = env.NODE_ENV === 'production' ? 'https' : 'http'

  console.log(`🦊 Elysia is running at ${url}://${hostname}:${port}`)
})
