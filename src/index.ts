import swagger from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import { getAllUsers, getUserById } from './controller/user'

const app: Elysia = new Elysia()
  .use(swagger())
  .get(
    '/',
    () => `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
  )
  .get('/users', getAllUsers)
  .get('/users/:id', ({ params }: { params: { id: string } }) => {
    const { id } = params
    return getUserById(id)
  })
  .listen(3000)
