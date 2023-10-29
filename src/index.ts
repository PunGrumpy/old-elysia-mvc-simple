import swagger from '@elysiajs/swagger'
import { Elysia } from 'elysia'
import { getAllUsers, getUserById } from './controller/user'

const app: Elysia = new Elysia()
  .use(swagger())
  .get('/', ({ set }) => (set.redirect = '/swagger'))
  .get('/users', async () => {
    try {
      const users = await getAllUsers()
      return { status: 200, message: 'success', body: users }
    } catch (e) {
      return { status: 404, message: 'users not found' }
    }
  })
  .get('/users/:id', async ({ params }: { params: { id: string } }) => {
    try {
      const { id } = params
      const user = await getUserById(id)
      return { status: 200, message: 'success', body: user }
    } catch (e) {
      return { status: 404, message: 'user not found' }
    }
  })
  .listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
