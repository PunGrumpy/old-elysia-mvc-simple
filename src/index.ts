import swagger from '@elysiajs/swagger'
import { Elysia } from 'elysia'

const app: Elysia = new Elysia()
  .use(swagger())
  .get(
    '/',
    () => `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  )
  .listen(3000)
