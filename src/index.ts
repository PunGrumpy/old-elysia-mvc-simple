import { env } from './env'
import { app } from './app'
import { CreateElysia } from './utils/elysia'
import { contextRequest } from './utils/contextRequest'
import { logger } from 'logixlysia'

const server = CreateElysia()
  .derive(ctx => contextRequest(ctx.request))
  .use(logger())
  .use(app)

server.listen({ port: env.PORT })
