import { env } from './env'
import { app } from './api'
import { CreateElysia } from './utils/elysia'

const server = CreateElysia()
  .get('/', ({ set }) => (set.redirect = '/swagger'))
  .use(app)
  .listen(env.PORT)

console.log(
  `🦊 Elysia is running at ${server.server?.hostname}:${server.server?.port}`
)
